import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AppRoutes from '../../constants/Routes';

import './index.scss';

function Header() {
  const [showNavItems, setShowNavItems] = useState(false);

  const toggleNavItemVisibility = () => {
    setShowNavItems((prev) => !prev);
  };

  const closeNavItems = () => {
    setShowNavItems(false);
  };

  return (
    <header className="HeaderComponent">
      <Link className="logo" to={AppRoutes.Home}>
        Home
      </Link>
      <button
        className="hamburger"
        onClick={toggleNavItemVisibility}
        onBlur={closeNavItems}
      >
        <span></span>
      </button>
      <nav className={`nav-items ${showNavItems ? 'visible' : ''}`}>
        <ul>
          <li>
            <NavLink to={AppRoutes.ResumeBuilder} activeClassName="active">
            Resume Builder
            </NavLink>
          </li>
          <li>
            <NavLink to={AppRoutes.TechBlogs} activeClassName="active">
            Tech Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to={AppRoutes.PersonalBlogs} activeClassName="active">
            Personal Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to={AppRoutes.AboutMe} activeClassName="active">
              About me
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
