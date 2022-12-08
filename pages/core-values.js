import { Zoom } from "react-reveal";
import CoverSection from "components/CoverSection";

import Head from "components/Head";

const CoreValues = () => {
  return (
    <>
      <Head
        title="Boungbai | Core Values"
        description="Core practices all those who are considered to be `a Boungbai` hold fast and stay adherent to."
        image="/assets/images/web-logo.png"
      />

      <CoverSection headingText="Core Values" span="Core Values" />

      <section className="pages">
        <div className="container">
          <h4 className="pages-heading">WE EXIST TO:</h4>
          <Zoom cascade>
            <div className="values">
              <div className="value">
                <i className=" fa-solid fa-users" />
                <p>
                  Innovatively solve humanity problems with little profit for
                  self-sustenance & growth.
                </p>
              </div>
              <div className="value">
                <i className="fa-solid fa-circle-user"></i>
                <p>
                  Go to the last lap to get things done rightly in a fun-filled
                  environment.
                </p>
              </div>
            </div>
          </Zoom>

          <Zoom cascade>
            <div className="values">
              <div className="value">
                <i className="fa-solid fa-gift"></i>
                <p>
                  Individual opportunity and reward based on merit; employees as
                  stakeholders.
                </p>
              </div>
              <div className="value">
                <i className="fa-solid fa-user-plus"></i>
                <p>
                  Continuous self-improvement via training/retraining. Customer
                  satisfaction is key.
                </p>
              </div>
            </div>
          </Zoom>

          <Zoom cascade>
            <div className="values">
              <div className="value">
                <i className="fa-solid fa-cogs"></i>
                <p>
                  Welcome/try all new ideas and pardon sincere errors not
                  considered as SIN in solving problems.
                </p>
              </div>
              <div className="value">
                <i className="fa-solid fa-street-view"></i>
                <p>
                  To create a place for the Izon-man notwithstanding
                  technological advancements at all times.
                </p>
              </div>
            </div>
          </Zoom>
        </div>
      </section>
    </>
  );
};

export default CoreValues;
