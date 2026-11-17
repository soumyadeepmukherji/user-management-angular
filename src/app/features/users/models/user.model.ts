export interface User {
  id?: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address?: string;
  skills: string[];
  documents: UserDocument[];
}

export interface UserDocument {
  fileName: string;
  file: File;
}

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo
}

type Geo = {
  lat: number,
  lng: number
}

type Company ={
  name: string;
  catchPhrase: string;
  bs: string;
}