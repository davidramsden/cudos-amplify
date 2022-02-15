import useAuthUser from "@hooks/UseAuthUser";

interface IUserProps {
  attributeKey: string;
  defaultValue?: string;
}

export const User = ({ attributeKey, defaultValue }: IUserProps) => {
  const [user] = useAuthUser();

  return (
    <>
      {user && user.attributes && attributeKey in user.attributes
        ? user.attributes[attributeKey as keyof typeof user.attributes]
        : defaultValue}
    </>
  );
};

export default User;
