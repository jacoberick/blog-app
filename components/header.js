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
import fire from '../config/fire-conf';

const linkSymbol = 'text-sm mr-2';

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(undefined);
  const [notification, setNotification] = useState('');

  const handleLogout = () => {
    fire
      .auth()
      .signOut()
      .then(() => {
        setNotification('Logged out');
        setTimeout(() => {
          setNotification('');
        }, 2000);
      });
  };

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
              Link={Link}
              FontAwesomeIcon={FontAwesomeIcon}
              faNewspaper={faNewspaper}
              faVideo={faVideo}
              faBook={faBook}
              faChevronDown={faChevronDown}
              faEnvelope={faEnvelope}
              faPalette={faPalette}
              linkSymbol={linkSymbol}
              handleLogout={handleLogout}
            />
          ) : (
            <MobileNav
              Link={Link}
              FontAwesomeIcon={FontAwesomeIcon}
              faNewspaper={faNewspaper}
              faVideo={faVideo}
              faBook={faBook}
              faChevronDown={faChevronDown}
              faEnvelope={faEnvelope}
              faPalette={faPalette}
              handleLogout={handleLogout}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
