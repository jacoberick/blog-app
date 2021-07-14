import { useState, useContext } from 'react';
import { Context } from '../../pages/Store';

const MobileHeader = ({
  Link,
  FontAwesomeIcon,
  faNewspaper,
  faVideo,
  faBook,
  faChevronDown,
  faEnvelope,
  faPalette,
}) => {
  //State
  const [menuActive, setMenuActive] = useState(false);
  const [booksActive, setBooksActive] = useState(false);
  const { loggedIn } = useContext(Context);

  //toggled classes based on state
  const burgerLines = 'w-10 h-1 bg-white rounded-sm transform transition';
  const slideLine = menuActive ? 'translate-x-2' : '';
  const rotateLines = menuActive ? 'rotate-180' : '';
  const displayBookDrop = booksActive ? 'flex mb-10 ml-10' : 'hidden';
  const symbolStyle = 'text-2xl mr-5';
  const textStyle =
    'text-3xl flex items-center mb-10 m475:text-2xl m400:text-lg';
  const dropDownToggle = menuActive
    ? 'translate-x-0 shadow-burgerMenu'
    : 'translate-x-full';

  //Handler functions
  const handleBurgerToggle = () => {
    !menuActive ? setMenuActive(true) : setMenuActive(false);
  };

  const handleBookToggle = () => {
    !booksActive ? setBooksActive(true) : setBooksActive(false);
  };

  return (
    <div className="">
      <nav className="">
        {/* Burger Menu */}
        <button
          id="BurgerBag"
          onClick={handleBurgerToggle}
          className={`focus:outline-none h-header`}
        >
          <div className={`${burgerLines} ${rotateLines}`}></div>
          <div
            className={`w-8 h-1 bg-white rounded-sm my-2 transform transition ${slideLine}`}
          ></div>
          <div className={`${burgerLines} ${rotateLines}`}></div>
        </button>

        {/* Drop Down Menu */}
        <ul
          className={`${dropDownToggle} transition transform absolute right-0 bg-main w-3/4 z-10 h-screenMinusHeader`}
        >
          <div id="linkContainer" className="ml-20 m475:ml-10 m400:ml-5 mt-10">
            <Link href="/articles">
              <a className={textStyle}>
                <FontAwesomeIcon icon={faNewspaper} className={symbolStyle} />
                Articles
              </a>
            </Link>

            <Link href="/videos">
              <a className={textStyle}>
                <FontAwesomeIcon icon={faVideo} className={symbolStyle} />
                Videos
              </a>
            </Link>

            <div
              id="BookNavLinkContainer"
              className="relative cursor-pointer"
              onClick={handleBookToggle}
            >
              <a id="booksLink" className={`${textStyle} flex items-center`}>
                <FontAwesomeIcon icon={faBook} className={symbolStyle} />
                Books
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`text-lg m475:text-xs ml-4 m475:ml-2 mt-2`}
                />
              </a>
              <ul id="subMenu" className={`${displayBookDrop}`}>
                <li>
                  <Link href="/books/recommended">
                    <a className={`text-3xl m475:text-2xl m400:text-lg`}>
                      Recommended Books
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <Link href="/contact">
              <a className={textStyle}>
                <FontAwesomeIcon icon={faEnvelope} className={symbolStyle} />
                Contact
              </a>
            </Link>

            {loggedIn && (
              <div>
                <Link href="/admin">
                  <a className={''}>Admin</a>
                </Link>
                <button>
                  <a className={''} onClick={handleLogout}>
                    Logout
                  </a>
                </button>
              </div>
            )}
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default MobileHeader;
