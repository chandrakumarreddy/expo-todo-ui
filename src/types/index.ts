export interface IUser {
  email: string;
  name: string;
  password: string;
}

export interface IAuthenticatedUser {
  email: string;
  name: string;
}

export interface ICategory {
  _id: string;
  color: { code: string; id: string; name: string };
  icon: { id: string; name: string; symbol: string };
  isEditable: boolean;
  name: string;
}
