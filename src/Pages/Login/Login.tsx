import { Hub } from "aws-amplify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Auth from "@core/Auth";
import Page from "@core/Page";
import useAuthUser from "@hooks/UseAuthUser";

const Login = () => {
  const [user] = useAuthUser();
  const navigate = useNavigate();

  useEffect(() => {
    const listener = async (data: any) => {
      if (data.payload.event === "signIn") {
        navigate(-1);
      }
    };

    Hub.listen("auth", listener);

    return () => {
      Hub.remove("auth", listener);
    };
  }, [navigate]);

  useEffect(() => {
    if (user) {
      navigate(-1);
    }
  }, [navigate, user]);

  return (
    <Page>
      <Auth></Auth>
    </Page>
  );
};

export default Login;
