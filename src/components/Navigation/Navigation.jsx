import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import UserMenu from "../UserMenu/UserMenu";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
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
            <li>
              <button onClick={handleLogout}>Log Out</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
