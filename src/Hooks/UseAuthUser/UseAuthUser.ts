import { Auth, Hub } from "aws-amplify";
import { useEffect, useState } from "react";
import IUser from "src/Types/User";

const useAuthUser = () => {
  let [user, setUser] = useState<IUser | null>(null);

  const updateUser = async () => {
    try {
      let user = await Auth.currentAuthenticatedUser();
      setUser(user as IUser);
    } catch {
      setUser(null);
    }
  };

  useEffect(() => {
    updateUser();

    const listener = async (data: any) => {
      await updateUser();
    };

    Hub.listen("auth", listener);

    return () => {
      Hub.remove("auth", listener);
    };
  }, []);

  return [user, setUser, updateUser] as const;
};

export default useAuthUser;
