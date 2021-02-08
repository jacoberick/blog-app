import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const hoverHighlight = "hover:text-highlight transition duration-200";

const Footer = ({}) => {
  return (
    <div className="font-body h-1/6 bg-main flex text-white px-24">
      <footer className="flex justify-between w-full items-center">
        <div id="emailSubSection">
          <p className="mb-4">Subscribe to the GA mailing list...</p>
          <div>
            <input
              className="text-text mr-4 outline-none rounded focus:ring focus:ring-battleship h-8"
              type="text"
              placeholder="E-mail"
            />
            <button className="focus:outline-none">
              <p className={`border-2 p-1 rounded ${hoverHighlight} h-8 flex items-center`}>Subscribe</p>
            </button>
          </div>
        </div>
        <div id="socialLinks" className="flex">
          <a href="http://twitter.com/gulaganthem" target="_blank" className={`ml-16 p-2 ${hoverHighlight}`}>
            <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
          </a>
          <a href="http://instagram.com/gulaganthem" target="_blank" className={`ml-16 p-2 ${hoverHighlight}`}>
            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCN4_NME6uyO8ZpUzeE72VzQ"
            target="_blank"
            className={`ml-16 p-2 ${hoverHighlight}`}
          >
            <FontAwesomeIcon icon={faYoutube} className="text-2xl" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
