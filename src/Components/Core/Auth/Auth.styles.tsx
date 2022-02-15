import styled from "styled-components";
import { Authenticator as BaseAuthenticator } from "@aws-amplify/ui-react";

export const AuthButton = styled.button`
  background-color: "black";
  color: "white";
  outline: "none";
  font-size: 18;
  padding: "12px 0px";
`;

export const AuthContainer = styled.div`
  width: 400;
  margin: "0 auto";
  display: "flex";
  flex-direction: "column";
  justify-content: "center";
  padding: 20;
`;

export const Authenticator = styled(BaseAuthenticator)`
  --amplify-colors-background-primary: ${(props: any) =>
    props.theme.colors.background};
`;
