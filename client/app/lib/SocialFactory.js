import { Facebook } from './Facebook';

export class SocialFactory {
  constructor() {
    this.fb = new Facebook();
  }

  getSocialAccount(type) {
    let object;
    if (type === 'FB') {
      object = this.fb;
    } else if (type === 'Insta') {
      object = new Facebook(); // new LinkedIn() etc
    }
    return object;
  }
}
