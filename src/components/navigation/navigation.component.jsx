import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import Logo from "../../Assets/images/logo.png";
import "./navigation.styles.scss";
import { signOutUser } from "../../utils/firebase.utils";

import { UserContext } from "../context/user.context";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const SignOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <>
      <div className='navigation'>
        <Link to='/' className='logo-container'>
          <img src={Logo} alt='' className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          <Link className='nav-link' to='/contact'>
            Contact
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={SignOutHandler}>
              Sign Out
            </span>
          ) : (
            <Link className='nav-link' to='/sign-in'>
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
