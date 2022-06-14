import { PetDataSource } from '../datasources/PetDataSource'
import { ProfileDataSource } from '../datasources/ProfileDataSource'
import { DataSources } from '../types/DataSources'

export default (): DataSources => ({
  profileDs: new ProfileDataSource(),
  petDs: new PetDataSource()
})
