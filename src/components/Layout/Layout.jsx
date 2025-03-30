import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";

const Layout = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {!isLoggedIn ? (
            <>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Log In</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
              <li>
                <UserMenu></UserMenu>
              </li>
            </>
          )}
        </ul>
      </nav>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
