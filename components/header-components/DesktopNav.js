import { useContext } from 'react'
import { Context } from '../../pages/Store'

const navLink =
  'flex items-center mr-8 hover:text-highlight transition duration-175'
const dropDownLink =
  'text-main p-2 hover:bg-grey rounded transition duration-150'

const DesktopNav = ({
  Link,
  FontAwesomeIcon,
  faNewspaper,
  faVideo,
  faBook,
  faChevronDown,
  faEnvelope,
  faPalette,
  linkSymbol,
  handleLogout,
}) => {
  const { loggedIn } = useContext(Context)

  return (
    <div>
      <nav id="navLinks" className="flex items-center">
        <Link href="/essays">
          <a className={navLink}>
            <FontAwesomeIcon icon={faNewspaper} className={linkSymbol} />
            Essays
          </a>
        </Link>

        {/* <Link href="/art">
            <a className={navLink}>
              <FontAwesomeIcon icon={faPalette} className={linkSymbol} />
              Art
            </a>
          </Link> */}

        <Link href="/videos">
          <a className={navLink}>
            <FontAwesomeIcon icon={faVideo} className={linkSymbol} />
            Videos
          </a>
        </Link>

        <div
          id="BookNavLinkContainer"
          className="group relative cursor-pointer"
        >
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
            className="bg-background hidden w-44 p-2 absolute group-hover:flex justify-center items-center flex-col rounded shadow-dropDown"
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
          <div>
            <Link href="/admin">
              <a className={navLink}>Admin</a>
            </Link>
            <button>
              <a className={navLink} onClick={handleLogout}>
                Logout
              </a>
            </button>
          </div>
        )}
      </nav>
    </div>
  )
}

export default DesktopNav
