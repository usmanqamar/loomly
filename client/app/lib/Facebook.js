import { FB_APP_ID } from '../utils/constants';

export class Facebook {
  constructor() {
    // new Promise(async resolve => {
    //
    // });
    (async function(that) {
      const FB = await that.getScript();
      FB.init({
        appId: FB_APP_ID,
        cookie: true,
        xfbml: true,
        version: 'v2.5',
      });
    })(this);

    // resolve(FB);
  }

  getScript() {
    return new Promise(resolve => {
      if (window.FB) {
        resolve(window.FB);
      }

      const id = 'facebook-jssdk';
      const fjs = document.querySelectorAll('script')[0];
      if (document.getElementById(id)) {
        return;
      }

      const js = document.createElement('script');
      js.id = id;
      js.src = '//connect.facebook.net/zh_TW/sdk.js';

      js.addEventListener('load', () => {
        Object.assign(this, {
          AppEvents: window.FB.AppEvents,
          Canvas: window.FB.Canvas,
          Event: window.FB.Event,
          Frictionless: window.FB.Frictionless,
          XFBML: window.FB.XFBML,
        });

        // console.log(this);

        resolve(window.FB);
      });

      fjs.parentNode.insertBefore(js, fjs);
    });
  }

  api(...params) {
    return new Promise(async resolve => {
      const FB = await this.getScript();

      const callback = response => {
        resolve(response);
      };

      if (params.length > 3) {
        // eslint-disable-next-line no-param-reassign
        params = params.slice(0, 3);
      }

      params.push(callback);

      FB.api(...params);
    });
  }

  ui(params) {
    return new Promise(async resolve => {
      const FB = await this.getScript();

      FB.ui(params, response => {
        resolve(response);
      });
    });
  }

  getLoginStatus() {
    return new Promise(async resolve => {
      const FB = await this.getScript();

      FB.getLoginStatus(response => {
        resolve(response);
      });
    });
  }

  login(params = { scope: 'public_profile,email' }) {
    return new Promise(async resolve => {
      const FB = await this.getScript();

      FB.login(response => {
        resolve(response);
      }, params);
    });
  }

  logout() {
    return new Promise(async resolve => {
      const FB = await this.getScript();

      FB.logout(response => {
        resolve(response);
      });
    });
  }

  getAuthResponse() {
    return new Promise(async resolve => {
      const FB = await this.getScript();

      resolve(FB.getAuthResponse());
    });
  }

  me() {
    return new Promise(async resolve => {
      const me = await this.api('/me?fields=email,gender,verified,link');

      resolve(me);
    });
  }

  async getAccounts(userId) {
    const accounts = await this.api(`/${userId}/groups`);
    return accounts;
  }

  async handleLogin() {
    let authRes = await this.getLoginStatus();

    if (authRes.status === 'unknown') {
      authRes = await this.login({
        scope:
          'public_profile,email,pages_manage_posts,publish_to_groups,instagram_basic',
      });
    }

    return this.getAccounts(authRes.authResponse.userID);
  }
}
