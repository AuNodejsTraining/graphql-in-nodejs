import config from '../config'
import { Pet } from '../types/Pet'
import BaseDataSource from './BaseDataSource'

export class PetDataSource extends BaseDataSource {
  constructor () {
    super()
    this.baseURL = config.pet.url
  }

  async getPets (): Promise<Pet[]> {
    const pets: Pet[] = await this.get('pets')
    return pets
  }
}
