import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBook, faEnvelope, faVideo } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion";

const navLink = "flex items-center mr-8 hover:text-red transition duration-175";
const linkSymbol = "text-sm mr-2";

const Header = ({ notification, loggedIn, articles, handleLogout }) => {
  return (
    <div id="header" className="text-sm font-body text-white bg-jet">
      <div id="headerInner " className="py-4 px-24 flex justify-between content-center">
        <div>
          <Link href="/">
            <h1 className="font-header text-3xl cursor-pointer">Gulag Anthem</h1>
          </Link>
        </div>
        <nav id="navLinks" className="flex items-center">
          <Link href="/" passHref>
            <a className={navLink}>
              <FontAwesomeIcon icon={faNewspaper} className={linkSymbol} />
              Articles
            </a>
          </Link>
          <Link href="/books/recommended" passHref>
            <a className={navLink}>
              <FontAwesomeIcon icon={faBook} className={linkSymbol} />
              Books
              <FontAwesomeIcon icon={faChevronDown} className="h-2 w-2 ml-1" />
            </a>
          </Link>
          <Link href="/" passHref>
            <a className={navLink}>
              <FontAwesomeIcon icon={faVideo} className={linkSymbol} />
              Videos
            </a>
          </Link>
          <Link href="/contact" passHref>
            <a className={navLink}>
              <FontAwesomeIcon icon={faEnvelope} className={linkSymbol} />
              Contact
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
