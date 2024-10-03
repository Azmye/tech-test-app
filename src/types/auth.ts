import { IRole, IUser } from "./user";

interface IUserData extends IUser {
  roles: IRole[];
}

export interface ILoginResponse {
  status: number;
  userdata: IUserData;
}

export interface IAuthInitialState {
  user: IUserData | null;
  isInit: boolean;
  isAuth: boolean;
}
