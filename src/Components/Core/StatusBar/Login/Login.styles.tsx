import styled from "styled-components";
import { Text as BaseText } from "@aws-amplify/ui-react";

export const Text = styled(BaseText)`
  color: ${(props: any) => props.theme.colors.text};
  background-color: ${(props: any) => props.theme.colors.background};
`;
