import Image from "next/image";
import { Fade } from "react-reveal";

import { backgroundImage } from "public/images";

const CoverSection = ({ headingText, span }) => {
  return (
    <section className="cover">
      <Fade bottom cascade>
        <div className="content">
          <h4>{headingText}</h4>

          <p>
            Home <i className="material-icons">circle</i>
            <span>{span}</span>
          </p>
        </div>
      </Fade>

      <Image
        className="image"
        src={backgroundImage}
        alt="Background"
        width={100}
        height={100}
        priority
      />
    </section>
  );
};

export default CoverSection;
