import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import DesktopNav from './header-components/DesktopNav';
import MobileNav from './header-components/MobileNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faBook,
  faEnvelope,
  faVideo,
  faPalette,
} from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';

const linkSymbol = 'text-sm mr-2';

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
    <div
      id="header"
      className="text-sm font-body text-white bg-main flex justify-center"
    >
      <div
        id="headerInner"
        className="px-24 m775:px-12 m475:px-6 max-w-100rem flex items-center justify-between w-full"
      >
        <div>
          <Link href="/">
            <h1 className="font-header text-3xl cursor-pointer py-4 m400:text-2xl m300:text-xl">
              Gulag Anthem
            </h1>
          </Link>
        </div>
        <div>
          {screenWidth > 900 ? (
            <DesktopNav
              loggedIn={loggedIn}
              Link={Link}
              FontAwesomeIcon={FontAwesomeIcon}
              faNewspaper={faNewspaper}
              faVideo={faVideo}
              faBook={faBook}
              faChevronDown={faChevronDown}
              faEnvelope={faEnvelope}
              faPalette={faPalette}
              linkSymbol={linkSymbol}
            />
          ) : (
            <MobileNav
              loggedIn={loggedIn}
              Link={Link}
              FontAwesomeIcon={FontAwesomeIcon}
              faNewspaper={faNewspaper}
              faVideo={faVideo}
              faBook={faBook}
              faChevronDown={faChevronDown}
              faEnvelope={faEnvelope}
              faPalette={faPalette}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
