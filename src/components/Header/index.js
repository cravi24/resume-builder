import { useState } from 'react';
import './index.scss';

function Header() {
  const [showNavItems, setShowNavItems] = useState(false);

  const toggleNavItemVisibility = () => {
    setShowNavItems((prev) => !prev);
  };
  return (
    <header className="HeaderComponent">
      <div className="logo">Home</div>
      <button className="hamburger" onClick={toggleNavItemVisibility}>
        <span></span>
      </button>
      <nav className={`nav-items ${showNavItems ? 'visible' : ''}`}>
        <ul>
          <li>
            <a href="/css">CSS</a>
          </li>
          <li>
            <a href="/react">React</a>
          </li>
          <li>
            <a href="/javascript">Javascript</a>
          </li>
          <li>
            <a href="/about">About me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
