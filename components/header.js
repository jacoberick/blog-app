import React, { useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBook, faEnvelope, faVideo } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";

const navLink = "flex items-center mr-8 hover:text-highlight transition duration-175";
const dropDownLink = "text-main p-2 hover:bg-grey rounded transition duration-150";
const linkSymbol = "text-sm mr-2";

const Header = ({ notification, loggedIn, handleLogout }) => {
  return (
    <div id="header" className="text-sm font-body text-white bg-main">
      <div id="headerInner " className="px-24 flex justify-between items-center content-center">
        <div>
          <Link href="/">
            <h1 className="font-header text-3xl cursor-pointer py-4">Gulag Anthem</h1>
          </Link>
        </div>
        <nav id="navLinks" className="flex items-center">
          <Link href="/">
            <a className={navLink}>
              <FontAwesomeIcon icon={faNewspaper} className={linkSymbol} />
              Articles
            </a>
          </Link>

          <Link href="/videos">
            <a className={navLink}>
              <FontAwesomeIcon icon={faVideo} className={linkSymbol} />
              Videos
            </a>
          </Link>

          <div id="BookNavLinkContainer" className="group relative cursor-pointer">
            <a
              id="booksLink"
              className={`${navLink} group-hover:text-highlight group-hover:h-header transition duration-175`}
            >
              <FontAwesomeIcon icon={faBook} className={linkSymbol} />
              Books
              <FontAwesomeIcon icon={faChevronDown} className="h-2 w-2 ml-1" />
            </a>
            <ul
              id="subMenu"
              className="hidden w-44 p-2 absolute group-hover:flex justify-center items-center flex-col rounded shadow-dropDown"
            >
              <li className={dropDownLink}>
                <Link href="/books/recommended">
                  <a>Recommended Books</a>
                </Link>
              </li>
            </ul>
          </div>

          <Link href="/contact">
            <a className={navLink}>
              <FontAwesomeIcon icon={faEnvelope} className={linkSymbol} />
              Contact
            </a>
          </Link>

          {loggedIn && (
            <Link href="/admin">
              <a className={navLink}>Admin</a>
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
