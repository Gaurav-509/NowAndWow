import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import Logo from "../../Assets/images/logo.png";
import "./navigation.styles.scss";
import { signOutUser } from "../../utils/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { UserContext } from "../context/user.context";
import { CartContext } from "../context/cart.context";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const SignOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  const { isCartOpen } = useContext(CartContext);

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

          {currentUser ? (
            <span className='nav-link' onClick={SignOutHandler}>
              Sign Out
            </span>
          ) : (
            <Link className='nav-link' to='/sign-in'>
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
