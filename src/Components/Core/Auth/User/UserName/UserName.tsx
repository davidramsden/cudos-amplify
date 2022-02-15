import User from "@core/Auth/User";

const UserName = () => {
  return <User attributeKey="name" defaultValue="Guest"></User>;
};

export default UserName;
