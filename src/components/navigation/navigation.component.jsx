import { Link, Outlet } from "react-router-dom";

import Logo from "../../Assets/images/logo.png";
import shoppingBag from "../../Assets/images/shopping-bag.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <div className='navigation'>
        <Link to='/' className='logo-container'>
          <img src={Logo} alt='' className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            Shop <img src={shoppingBag} alt='' className='shopping-bag' />
          </Link>
          <Link className='nav-link' to='/signIn'>
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
