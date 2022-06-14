import config from '../config';
import { Profile } from '../types/Profile';
import BaseDataSource from './BaseDataSource';

export class ProfileDataSource extends BaseDataSource {
  constructor() {
    super();
    this.baseURL = config.profile.url
  }

  async getProfile (): Promise<Profile> {
    const profile: Profile = await this.get('profile')
    return profile
  }
}
