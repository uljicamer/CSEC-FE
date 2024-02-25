export interface User {
  ID: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: string;
}

export interface UserLogin {
  email: string;
  password: string;
}
