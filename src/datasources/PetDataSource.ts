import { Pet } from '../types/Pet';
import BaseDataSource from './BaseDataSource';

export class PetDataSource extends BaseDataSource {
  constructor() {
    super();
    // TODO: get base url from config
    this.baseURL = "http://localhost:3000"
  }

  async getPets (): Promise<Pet[]> {
    const pets: Pet[] = await this.get('pets')
    return pets
  }
}
