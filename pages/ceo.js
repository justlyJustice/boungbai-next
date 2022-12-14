import Image from "next/image";
import { Fade, LightSpeed } from "react-reveal";

import CoverSection from "components/CoverSection";
import Head from "components/Head";

import Layout from "components/Layout";
import { ceoPic } from "public/images";

const Ceo = () => {
  return (
    <Layout>
      <CoverSection
        headingText="The CEO"
        span="The CEO"
        image="/images/ceo.jpg"
      />

      <Head
        title="Boungbai | The CEO"
        description="
        Founder, Chairman and CEO of Boungbai Computers Netware Ltd.He was moved to Port Harcourt, Rivers State for better
        schooling where he was registered with Niger Grammar School, to earn both Junior and Senior WAEC Certificate. In 2006, he
        begged his Bsc.Ed from the Niger Delta University in Agricultural Science Education. After serving the country in
        her compulsory National Youth Service in 2007; in search for education, Mr. Oyeinnoah Paris moved to India to explore the Information Communication Technology (I.C.T.) world in 2009.
        "
        image={ceoPic}
      />

      <section className="about-ceo">
        <div className="container">
          <Fade top>
            <Image src={ceoPic} alt="Ceo Pic" />
          </Fade>
          <div className="about-ceo-container">
            <LightSpeed cascade right>
              <div className="title">
                <h4>Oyeinnoah Paris Digifa</h4>
                <p>
                  Founder, Chairman and CEO of Boungbai Computers Netware Ltd.
                </p>
                <hr />
              </div>
            </LightSpeed>

            {/* <div className="bio">
              <div className="his-life">
                <div className="icon">
                  <i className="material-icons">face</i>
                </div>

                <div className="line"></div>

                <div className="info">
                  <h5>Early Life</h5>
                  <p>
                    He was born on December 4, 1986 in Otuan community where he
                    was raised.
                  </p>

                  <p>
                    He was moved to Port Harcourt, Rivers State for better
                    schooling where he was registered with Niger Grammar School,
                    to earn both Junior and Senior WAEC Certificate. In 2006, he
                    begged his Bsc.Ed from the Niger Delta University in
                    Agricultural Science Education. After serving the country in
                    her compulsory National Youth Service in 2007; in search for
                    education, Mr. Oyeinnoah Paris moved to India to explore the
                    Information Communication Technology (I.C.T.) world in 2009.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Ceo;
