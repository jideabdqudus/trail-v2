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

// id(pin):22
// name(pin):"Tobi Esho"
// description(pin):"Yes"
// code(pin):"HUT"
// image(pin):"https://boi-dta-prod.s3.eu-west-1.amazonaws.com/trails/232D6547A7MicrosoftTeams-image(10).png"
// budget(pin):1209
// totalNumberOfBeneficiaries(pin):32
// form(pin):
// created(pin):"Jul 06, 2021 11:07AM"

export interface IIndicators{
  indicatorId: number,
  description: string, 
  programIndicatorId: number
}
export interface ISdg{
  sdgId?: number,
  name: string,
  indicators: any,
}
export interface IProgramEach{
  id?: number,
  name: string,
  description: string, 
  code: string,
  image?: any, 
  budget: number, 
  totalNumberOfBeneficiaries: number,
  form?: any,
  locations: any,
  activeMarker: any,
  sdgs: ISdg[],
  created?: string
}

export interface IProgram{
  loading?: boolean;
  budgetAndBeneficiaries?: IBudgetAndBeneficiaries
  programs?: []
  sdgsAndIndicators?: []
}

export interface IPrograms{
  program: IProgram
}