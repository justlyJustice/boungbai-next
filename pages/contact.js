import { Slide } from "react-reveal";

import CoverSection from "components/CoverSection";
import Head from "components/Head";
import Layout from "components/Layout";

import { webLogo } from "public/images";

const Contact = () => {
  return (
    <Layout>
      <Head
        title="Boungbai | Contact"
        description="Feel free to reach out to us and let us know what you think of our services."
        image={webLogo}
      />
      <CoverSection headingText="Contact Us" span="Contact Us" />

      <Slide top cascade>
        <section className="info">
          <div className="content">
            <i className="fa-solid fa-location"></i>
            <p>
              No 30 Ebis Mechanic Road, Opposite Sonia Estate, Amarata, Yenagoa,
              Bayelsa State.
            </p>
          </div>
          <div className="content">
            <i className="fa-solid fa-phone"></i>
            <p>+234 (0) 7025424338</p>
          </div>
          <div className="content">
            <i className="fa-solid fa-envelope"></i>
            <p>info@boungbai.com</p>
          </div>
        </section>
      </Slide>
    </Layout>
  );
};

export default Contact;
