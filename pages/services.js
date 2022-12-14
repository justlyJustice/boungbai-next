import { Rotate } from "react-reveal";

import Head from "components/Head";
import CoverSection from "components/CoverSection";
import Layout from "components/Layout";

const Services = () => {
  return (
    <Layout>
      <Head
        title="Boungbai | Services"
        description="We offer a wide range of servies withe following inclusive Software, Website Development, Cloud Computing, Artificial Intelligence and Ethical Hacking, App Development"
        image="/images/web-logo.png"
      />

      <CoverSection headingText="Our Services" span="Services" />

      <section className="courses">
        <Rotate cascade>
          <div className="containerDiv">
            <div className="courseDiv">
              <div>
                <i className="material-icons">developer_mode</i>
                <h5>App Development</h5>
              </div>
            </div>

            <div className="courseDiv">
              <div>
                <i className="material-icons">laptop_mac</i>
                <h5>Web Development & Hosting</h5>
              </div>
            </div>

            <div className="courseDiv">
              <div>
                <i className="material-icons">vpn_lock</i>
                <h5>Penetration Testing</h5>
              </div>
            </div>

            <div className="courseDiv">
              <div>
                <i className="material-icons">keyboard</i>
                <h5>Project Typing</h5>
              </div>
            </div>

            <div className="courseDiv">
              <div>
                <i className="material-icons">palette</i>
                <h5>Graphic Design</h5>
              </div>
            </div>

            <div className="courseDiv">
              <div>
                <i className="material-icons">phonelink</i>
                <h5>General IT Consultancy</h5>
              </div>
            </div>
          </div>
        </Rotate>
      </section>
    </Layout>
  );
};

export default Services;
