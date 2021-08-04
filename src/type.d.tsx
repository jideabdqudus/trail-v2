export interface ISignUp {
  firstName: string,
  lastName: string,
  email: string,
  phone: number,
  password: string,
  password2?: string,
  organization?: string,
  organizationType: string,
  terms: boolean,
}

export interface ILogin {
  email: string,
  password: string,
}

export interface IForgotPassword {
  email: string
}

export interface IAuth {
  user: object;
  loading: boolean;
  isAuthenticated: boolean;
  accessToken?: any;
}

export interface IAuthenticate {
  auth: IAuth;
}