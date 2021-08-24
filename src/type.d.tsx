export interface ISignUp {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  password: string;
  password2?: string;
  organization?: string;
  organizationType: string;
  terms: boolean;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IForgotPassword {
  email: string;
}
export interface IUser {
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

export interface IBudgetAndBeneficiaries {
  totalbudget: number;
  totalbeneficiaries: number;
}

export interface IIndicators {
  indicatorId: number;
  description: string;
  programIndicatorId: number;
}
export interface ISdg {
  sdgId?: number;
  name: string;
  indicators: any;
}
export interface IProgramEach {
  id?: number;
  name: string;
  description: string;
  code: string;
  image?: any;
  budget: number;
  totalNumberOfBeneficiaries: number;
  form?: any;
  locations: any;
  activeMarker: any;
  sdgs: ISdg[];
  created?: string;
}

export interface IProgram {
  loading?: boolean;
  budgetAndBeneficiaries?: IBudgetAndBeneficiaries;
  programs?: [];
  sdgsAndIndicators?: [];
  indicatorsUnderSdgs?: [],
}

export interface IPrograms {
  program: IProgram;
}

//forms
export interface IFormData{
  id: number,
  formid: number,
  formlink: string,
  createdBy: number,
  name: string
}

export interface IPagination{
  currentPage: number,
  limit: number,
  totalPages: number
}
export interface IForm {
  loading?: boolean;
  forms?: IFormData;
  filtered?: any;
  pagination: IPagination;
}

export interface IForms {
  form: IForm;
}
