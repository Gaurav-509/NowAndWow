import { useContext } from "react";
import { Outlet } from "react-router-dom";

import Logo from "../../Assets/images/logo.png";
import { signOutUser } from "../../utils/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { UserContext } from "../context/user.context";
import { CartContext } from "../context/cart.context";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const SignOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <img src={Logo} alt='' className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>Shop</NavLink>

          {currentUser ? (
            <span className='nav-link' onClick={SignOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <NavLink to='/sign-in'>Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
