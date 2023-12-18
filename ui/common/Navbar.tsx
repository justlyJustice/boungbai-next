"use client";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "jquery/dist/jquery";

import Link from "next/link";
import Image from "next/image";

import { webLogo } from "@/public/assets/images";

// import useUser from "hooks/useUser";
// import { AuthDropdown } from "./AuthDropdown";

const Navbar = () => {
  // const { user } = useUser();

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <Image className="img" src={webLogo} alt="Web Logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <Link aria-current="page" className="nav-link" href="/">
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-haspopup="true"
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

              {/* <li className="nav-item">
                <Link className="nav-link" href="/blog">
                  Blog
                </Link>
              </li> */}

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

              {/* <li className="nav-item">
                <Link className="nav-link" href="/media-gallery">
                  Gallery
                </Link>
              </li> */}

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
