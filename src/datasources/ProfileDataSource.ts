import { Profile } from '../types/Profile';
import BaseDataSource from './BaseDataSource';

export class ProfileDataSource extends BaseDataSource {
  constructor() {
    super();
    // TODO: get base url from config
    this.baseURL = "http://localhost:3000"
  }

  async getProfile (): Promise<Profile> {
    const profile: Profile = await this.get('profile')
    return profile
  }
}
