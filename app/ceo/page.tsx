import Image from "next/image";

import { ceoPic } from "@/public/assets/images";
import CoverSection from "@/ui/common/Cover";

export default function CeoPage() {
  return (
    <>
      <CoverSection headingText="The CEO" span="The CEO" />

      <section className="about-ceo">
        <div className="container">
          <>
            <Image src={ceoPic} alt="Ceo Pic" />
          </>

          <div className="about-ceo-container">
            <>
              <div className="title">
                <h4>Oyeinnoah Paris Digifa</h4>
                <p>
                  Founder, Chairman and CEO of Boungbai Computers Netware Ltd.
                </p>
                <hr />
              </div>
            </>

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
    </>
  );
}
