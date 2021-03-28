import { useState } from 'react';
import './index.scss';

function Header() {
  const [showNavItems, setShowNavItems] = useState(false);

  const toggleNavItemVisibility = () => {
    setShowNavItems(prev => !prev);
  };
  return (
    <header className="HeaderComponent">
      <div className="logo">Home</div>
      <button className="hamburger" onClick={toggleNavItemVisibility}>
        <span></span>
      </button>
      <nav className={`nav-items ${showNavItems ? 'visible': ''}`}>
        <ul>
          <li>
            <a href="/about">CSS</a>
          </li>
          <li>
            <a href="/blogs">React</a>
          </li>
          <li>
            <a href="/">Javascript</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
