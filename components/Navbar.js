/* eslint-disable no-unused-vars */
import Link from "next/link";
import Image from "next/image";

import { webLogo } from "public/images";
/* import useUser from "hooks/useUser"; */
/* import { AuthDropdown } from "./AuthDropdown"; */
/* import useAdmin from "hooks/useAdmin"; */

const Navbar = () => {
  /* const { user } = useUser(); */

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <Image src={webLogo} width={80} alt="Web Logo" />
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

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  href="#"
                >
                  About Us
                </Link>

                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                  id="navbarDropdDownMenuLink"
                >
                  <Link className="dropdown-item" href="/corporate-overview">
                    Corporate Overview
                  </Link>

                  <Link className="dropdown-item" href="/vision-and-mission">
                    Our Vision & Mission
                  </Link>

                  <Link className="dropdown-item" href="/core-values">
                    Our Core Values
                  </Link>

                  <Link className="dropdown-item" href="/ceo">
                    Meet the Digital Boss
                  </Link>

                  <Link className="dropdown-item" href="/team">
                    Meet the Boungbai Team
                  </Link>
                </div>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="/services">
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="/blog">
                  Blog
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="/brands">
                  Brands
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="/products">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="/courses">
                  Courses
                </Link>
              </li>

              {/* <AuthDropdown user={user} /> */}

              <li className="nav-item">
                <Link className="nav-link" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
