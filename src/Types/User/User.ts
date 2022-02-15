import { CognitoUser } from "@aws-amplify/auth";

export interface IUserAttributes {
  email: string;
  name: string;
}

export interface IUser extends CognitoUser {
  attributes: IUserAttributes;
}
