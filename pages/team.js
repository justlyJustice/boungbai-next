import { Fade } from "react-reveal";

import CoverSection from "components/CoverSection";
import Head from "components/Head";

import TeamMember from "components/TeamMember";

import teamData from "data/team";

import { webLogo } from "public/images";
import webUrl from "config/webUrl";

const Team = () => {
  return (
    <>
      <CoverSection headingText="Boungbai Team" span="Boungbai Team" />

      <Head
        title="Boungbai | Team"
        description="Our staff with their unquestionable integrity and unwavering commitment make sure that every activity gets just the right kind of attention to be successful."
        image="/assets/images/web-logo.png"
      />

      <section className="pages">
        <Fade cascade bottom>
          <div className="container">
            <div className="all-team">
              {teamData.map((member, i) => (
                <TeamMember
                  name={member.name}
                  image={member.image}
                  position={member.position}
                  department={member.department}
                  key={i}
                />
              ))}
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
};

export default Team;
