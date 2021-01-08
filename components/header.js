import React, { useState } from "react";
import Link from "next/link";
import CreatePost from "../components/CreatePost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const bookDropDownMenu = (
  <div>
    <Link href="/" passHref>
      <a>Recommended Books</a>
    </Link>
  </div>
);

const hoverHighlight = "hover:text-red transition duration-200";

const HandleMouseOver = () => {};

const Header = ({ notification, loggedIn, articles, handleLogout }) => {
  return (
    <div id="header" className="text-base font-body text-white bg-jet">
      <div id="headerInner " className="py-4 px-24 flex justify-between content-center">
        <Link href="/">
          <h1 className="font-header text-3xl cursor-pointer">Gulag Anthem</h1>
        </Link>
        <div id="navLinks" className="flex items-center">
          <Link href="/" passHref>
            <a className={`ml-8 ${hoverHighlight}`}>Articles</a>
          </Link>
          <div id="booksContainer" className={`flex items-center ml-8 ${hoverHighlight}`}>
            <Link href="/" passHref>
              <a>Books</a>
            </Link>
            <FontAwesomeIcon icon={faChevronDown} className="h-2 w-2 ml-2" />
          </div>
          <Link href="/" passHref>
            <a className={`ml-8 ${hoverHighlight}`}>Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
