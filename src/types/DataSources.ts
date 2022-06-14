import { PetDataSource } from '../datasources/PetDataSource';
import { ProfileDataSource } from '../datasources/ProfileDataSource';

export type DataSources = {
  profileDs: ProfileDataSource;
  petDs: PetDataSource;
}
