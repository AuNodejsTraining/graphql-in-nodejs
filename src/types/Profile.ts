enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER"
}

export type Profile = {
  id: string;
  name: string;
  gender: Gender;
  dob: string;
  idCard: string;
  avatar: string;
}
