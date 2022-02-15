import { ReactNode } from "react";
import { Authenticator, AuthContainer } from "./Auth.styles";

import "@aws-amplify/ui-react/styles.css";

interface IAuthProps {
  children?: ReactNode;
  components?: any; // TODO: Type this properly. It should be customComponents
  header?: ReactNode;
  footer?: ReactNode;
  initialState?: "signIn" | "signUp" | "resetPassword" | undefined;
}

const Auth = (props: IAuthProps) => {
  return (
    <Authenticator.Provider>
      {props.header}
      <Authenticator
        components={props.components}
        initialState={props.initialState}
      >
        {({ signOut, user }) => {
          return <AuthContainer>{props.children}</AuthContainer>;
        }}
      </Authenticator>
      {props.footer}
    </Authenticator.Provider>
  );
};

export default Auth;
