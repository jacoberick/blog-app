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
    <header id="header" className="text-sm font-body text-white bg-main">
      <div
        id="headerInner "
        className="px-24 flex justify-between items-center content-center m775:px-12 m475:px-6"
      >
        <div>
          <Link href="/">
            <h1 className="font-header text-3xl cursor-pointer py-4 m400:text-2xl m300:text-xl">
              Gulag Anthem
            </h1>
          </Link>
        </div>
        {screenWidth > 900 ? <DesktopNav loggedIn={loggedIn} /> : <MobileNav />}
      </div>
    </header>
  );
};

export default Header;
