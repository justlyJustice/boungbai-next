import { LightSpeed, Roll } from "react-reveal";
import Link from "next/link";
import Image from "next/image";

import { webLogo } from "public/images";

const Footer = () => {
  return (
    <footer>
      <div className="containerDiv">
        <div className="footerDiv">
          <div className="logo-div">
            <Image
              className="footer-img"
              src={webLogo}
              alt="Web Logo"
              width={100}
              height={100}
            />
          </div>

          <div className="nav-div">
            <h6>ABOUT US</h6>
            <hr />

            <Roll top cascade>
              <ul>
                <li>
                  <Link href="/corporate-overview">Corporate Overview</Link>
                </li>
                <li>
                  <Link href="/vision-and-mission">
                    Our Vision {"&"} Mission
                  </Link>
                </li>
                <li>
                  <Link href="/core-values">Our Core Values</Link>
                </li>
                <li>
                  <Link href="/ceo">Meet the Digital Boss</Link>
                </li>
                <li>
                  <Link href="/team">Meet the Boungbai Team</Link>
                </li>
              </ul>
            </Roll>
          </div>

          <div className="nav-div">
            <h6>SERVICES</h6>
            <hr />
            <Roll top cascade>
              <ul>
                <li>
                  <Link href="/services/app-development">App Development</Link>
                </li>
                <li>
                  <Link href="/services/web-development">
                    Web Development {"&"} Hosting
                  </Link>
                </li>
                <li>
                  <Link href="/services/pen-testing">Penetration Testing</Link>
                </li>
                <li>
                  <Link href="/services/project-typing">Project Typing</Link>
                </li>
                <li>
                  <Link href="/services/it-consultancy">
                    General IT Consultancy
                  </Link>
                </li>
              </ul>
            </Roll>
          </div>

          <div className="nav-div">
            <h6>COURSES</h6>
            <hr />
            <Roll top cascade>
              <ul>
                <li>
                  <Link href="/courses/graphic-design">Graphic Design</Link>
                </li>
                <li>
                  <Link href="/courses/penetration-testing">
                    Penetration Testing
                  </Link>
                </li>
                <li>
                  <Link href="/courses/web-development-and-hosting">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/courses/microsoft-office-suite">
                    Microsoft Office Suite
                  </Link>
                </li>
              </ul>
            </Roll>
          </div>

          <div className="nav-div">
            <h6>BRANDS</h6>
            <hr />
            <Roll top cascade>
              <ul>
                <li>
                  <Link href="/brands">Whobewho in I.C.T.</Link>
                </li>
                <li>
                  <Link href="/brands">IzonCodeKids</Link>
                </li>
                <li>
                  <Link href="/brands">Bayelsa Women in I.C.T.</Link>
                </li>
              </ul>
            </Roll>
          </div>

          <div className="nav-div">
            <h6>SOCIALS</h6>
            <hr />
            <Roll top cascade>
              <ul>
                <li>
                  <a
                    href="https://web.facebook.com/Boungbai-Computers-Netware-Ltd-189149801523163"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/boungbai"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/channel/UCjPLDg172tUfrB56RAWW1ig"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </Roll>
          </div>
        </div>

        <div className="rightsDiv">
          <LightSpeed right>
            <p>
              <a
                href="mailto:info@boungbai.com"
                style={{ color: "#98affa", textDecoration: "none" }}
              >
                <i
                  className="fa-solid fa-envelope"
                  style={{ color: "#98affa" }}
                ></i>{" "}
                info@boungbai.com
              </a>{" "}
              <br />
              &copy; Copyright 2020 Boungbai Computers Netware Ltd. - All Rights
              Reserved
            </p>
          </LightSpeed>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
