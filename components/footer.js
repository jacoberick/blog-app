import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const hoverHighlight = 'hover:text-highlight transition duration-200';

const Footer = () => {
  return (
    <footer className="font-body bg-main flex text-white px-24 py-4 justify-between items-center m775:flex-col-reverse m475:px-0 mt-auto">
      <div
        id="emailSubSection"
        className="m775:flex m775:flex-col m775:items-center"
      >
        <p className="m-0 m475:text-center m400:text-sm">
          Subscribe to the GA mailing list...
        </p>
        <div className="mt-4">
          <input
            className="text-text mr-4 outline-none rounded focus:ring focus:ring-battleship h-8"
            type="text"
            placeholder="E-mail"
          />
          <button className={`focus:outline-none`}>
            <p
              className={`hover:border-highlight ${hoverHighlight} transition duration-200 border-2 p-1 m-0 rounded h-8 flex items-center`}
            >
              Subscribe
            </p>
          </button>
        </div>
      </div>
      <div id="socialLinks" className="flex m775:mb-5">
        <a
          href="http://twitter.com/gulaganthem"
          target="_blank"
          className={`ml-16 p-2 flex m775:ml-10 m775:mr-10 m475:mr-5 m475:ml-5 ${hoverHighlight}`}
        >
          <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
        </a>
        <a
          href="http://instagram.com/gulaganthem"
          target="_blank"
          className={`ml-16 p-2 flex m775:ml-10 m775:mr-10 m475:mr-10 m475:ml-10 ${hoverHighlight}`}
        >
          <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCN4_NME6uyO8ZpUzeE72VzQ"
          target="_blank"
          className={`ml-16 p-2 flex m775:ml-10 m775:mr-10 m475:mr-5 m475:ml-5 ${hoverHighlight}`}
        >
          <FontAwesomeIcon icon={faYoutube} className="text-2xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
