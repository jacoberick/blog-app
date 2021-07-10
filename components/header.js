import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import DesktopNav from './header-components/DesktopNav';
import MobileNav from './header-components/MobileNav';

const Header = ({ notification, loggedIn, handleLogout }) => {
  const [screenWidth, setScreenWidth] = useState(undefined);

  useEffect(() => {
    // handle screen resize function
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // resize event listener
    window.addEventListener('resize', handleResize);
    //call handleResize to set initial state
    handleResize();
    //remove on onMount
    return () => removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="header" className="text-sm font-body text-white bg-main">
      <div
        id="headerInner "
        className="px-24 flex justify-between items-center content-center"
      >
        <div>
          <Link href="/">
            <h1 className="font-header text-3xl cursor-pointer py-4">
              Gulag Anthem
            </h1>
          </Link>
        </div>
        {screenWidth > 900 ? <DesktopNav loggedIn={loggedIn} /> : <MobileNav />}
      </div>
    </div>
  );
};

export default Header;
