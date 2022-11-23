import Link from "next/link";
import { webLogo } from "assets/images";

/* import authService from "services/authService"; */
import { LazyLoadImage } from "react-lazy-load-image-component";

const user = authService.currentUser;

const AuthNavbar = () => {
  /* const handleLogout = () => {
    authService.logout();

    setTimeout(() => {
      window.location = `/`;
    }, 2000);
  }; */

  /*  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" href="/">
          <LazyLoadImage src={webLogo} alt="Web Logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse flex-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                href="#navbarDropdDownMenuLink"
              >
                {user.email}
              </Link>

              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" href="#" onClick={handleLogout}>
                  Logout
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  ); */

  return null;
};

export default AuthNavbar;
