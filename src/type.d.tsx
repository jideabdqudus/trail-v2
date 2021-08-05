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
export interface IUser{
  id: number;
  firstName: string; 
  lastName: string;
  isActive: false; 
  email: string; 
  phone: string; 
  organizationName: string; 
  organizationType: string; 
  image: any;
  created: string;
}

export interface IAuth {
  user: IUser;
  loading: boolean;
  isAuthenticated: boolean;
  accessToken?: any;
}

export interface IAuthenticate {
  auth: IAuth;
}


export interface IBudgetAndBeneficiaries{
  totalbudget:number
  totalbeneficiaries:number
}


export interface IProgram{
  loading?: boolean;
  budgetAndBeneficiaries?: IBudgetAndBeneficiaries
  programs?: []
}

export interface IPrograms{
  program: IProgram
}