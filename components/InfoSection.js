import Image from "next/image";
import { Fade, Flip, Roll, Rotate } from "react-reveal";
import Link from "next/link";

import Button from "common/Button";
import ContactForm from "./ContactForm";

import { blogPhoto } from "public/images";

const InfoSection = () => {
  return (
    <>
      <section className="service">
        <h2>Our Services</h2>

        <Fade cascade bottom>
          <div className="containerDiv">
            <div className="serviceDiv">
              <div>
                <i className="material-icons">phonelink</i>
                <h5>General IT Consultancy</h5>
              </div>
            </div>

            <div className="serviceDiv">
              <div>
                <i className="material-icons">laptop_chromebook</i>
                <h5>Web Development & Hosting</h5>
              </div>
            </div>

            <div className="serviceDiv">
              <div>
                <i className="material-icons">smartphone</i>
                <h5>App Development</h5>
              </div>
            </div>

            <div className="serviceDiv">
              <div>
                <i className="material-icons">lock_open</i>
                <h5>Penetration Testing</h5>
              </div>
            </div>
          </div>
        </Fade>
      </section>

      <section className="blog">
        <h2>
          Our <span>Blog</span>
        </h2>

        <Fade right cascade>
          <div className="containerDiv">
            <div className="blogDiv">
              <div className="all-blog">
                <div className="img">
                  <Image width={300} src={blogPhoto} alt="Blog" />
                </div>

                <div className="content">
                  <h4>Izon-Code Kids</h4>
                  <hr />

                  <p>
                    The best way to build any society is to begin with the young
                    and make them just as good as possible ‘Socrates’.
                    IzonCodeKids indoctrinates the...
                  </p>
                  <p>
                    <Link href="/brands">Continue reading...</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>

      <section className="brands">
        <Roll top>
          <h2>Our Brands</h2>
        </Roll>

        <Flip right cascade>
          <div className="brand-div">
            <div className="all-brand">
              <h4 className="brand-heading">
                <i className="material-icons">group_work</i>
                <span>WhobeWho</span>
              </h4>
              <p>
                <Link href="/brands" className="brand-link">
                  Check brand
                </Link>
              </p>
            </div>
            <div className="all-brand">
              <h4 className="brand-heading">
                <i className="material-icons">group_work</i>
                <span>IzonCode Kids</span>
              </h4>
              <p>
                <Link href="/brands" className="brand-link">
                  Check brand
                </Link>
              </p>
            </div>

            <div className="all-brand">
              <h4 className="brand-heading">
                <i className="material-icons">group_work</i>
                <span>Bayelsa Women in I.C.T.</span>
              </h4>
              <p>
                <Link href="/brands" className="brand-link">
                  Check brand
                </Link>
              </p>
            </div>
          </div>
        </Flip>
      </section>

      <section className="course">
        <div className="headingDiv">
          <h2>
            Our <span>Courses</span>
          </h2>

          <Flip left cascade>
            <ul>
              <li>
                <Link href={`/courses/graphic-design`}>Graphic Design</Link>
              </li>

              <li>
                <Link href={`/courses/web-development-and-hosting`}>
                  Web Development & Hosting
                </Link>
              </li>

              <li>
                <Link href={`/courses/microsoft-office-suite`}>
                  Microsoft Office Suite
                </Link>
              </li>

              <li>
                <Link href={`/courses/penetration-testing`}>
                  Penetration Testing
                </Link>
              </li>
            </ul>
          </Flip>

          <Button
            href="/courses"
            title="More Courses"
            style={{ backgroundColor: "white", color: "#000" }}
          />
        </div>

        <Rotate bottom right>
          <div className="imgDiv"></div>
        </Rotate>
      </section>

      <section className="testimonial">
        <Flip right>
          <h2>
            Words from Our <span>Client</span>
          </h2>
        </Flip>

        <div className="containerDiv">
          <Fade top cascade>
            <div className="testimonialDiv">
              <div className="icon-div">
                <i className="material-icons">person_pin</i>
              </div>
              <p>
                There are countless firms in town but Boungbai towers above the
                rest. It is the firm for my busy schedules, for two basic
                reasons: They have first rated computer consultants that are
                receptive to my computer and internet needs. Above all, their
                prices are affordable. They are also patient and understanding
                in all ramifications.
              </p>

              <h5>
                <hr />
                Tarriladei T. Theophilus, Esq,
                <span>
                  Legal Practitioner & Managing Solicitor, Tarriladei T.
                  Theophilus & Co.
                </span>
                <span>Barristers, Solicitors & Consultants</span>
                <span>No. 33, Imgbi Road, Yenagoa, Bayelsa</span>
                <hr />
              </h5>
            </div>
          </Fade>
        </div>
      </section>

      <ContactForm />
    </>
  );
};

export default InfoSection;
