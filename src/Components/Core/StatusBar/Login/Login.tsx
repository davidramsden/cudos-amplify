import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuthUser from "@hooks/UseAuthUser";
import { Auth } from "aws-amplify";

const Login = () => {
  const [user] = useAuthUser();

  const signOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <>
      {(() => {
        return user ? (
          <NavDropdown title={user.attributes.email}>
            <Nav.Item>
              <Link to="/" onClick={signOut}>
                Sign Out
              </Link>
            </Nav.Item>
          </NavDropdown>
        ) : (
          <Nav.Item>
            <Link to="/login">Sign In</Link>
          </Nav.Item>
        );
      })()}
    </>
  );
};

export default Login;
