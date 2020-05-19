import { Facebook } from './Facebook';

export class SocialFactory {
  getSocialAccount(type) {
    let object;
    if (type === 'FB') {
      object = new Facebook();
    } else if (type === 'Insta') {
      object = new Facebook();
    }
    return object;
  }
}
