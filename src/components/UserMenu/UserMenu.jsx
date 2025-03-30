import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <p>Welcome, {name}</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default UserMenu;
