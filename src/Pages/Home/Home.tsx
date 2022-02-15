import Page from "@core/Page";
import UserName from "@core/Auth/User/UserName";

const Home = () => {
  return (
    <Page>
      <h1>
        Hello <UserName />
      </h1>
    </Page>
  );
};

export default Home;
