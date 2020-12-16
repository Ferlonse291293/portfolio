export interface User {
  blocked?: null | boolean;
  business?: null | boolean;
  confirmed?: boolean;
  created_at?: string;
  fcm_token?: string;
  email?: string;
  id?: number;
  jwt?: string;
  name?: string;
  phone?: string;
  provider?: string;
  rider?: null | number;
  role?: string;
  surname?: string;
  uuid?: number;
  password?: string;
  returnSecureToken?: boolean;
}
export interface Role {
  description: string;
  id: number;
  name: string;
  type: string;
}

