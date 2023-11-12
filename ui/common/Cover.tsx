import Image from "next/image";
import { backgroundImage } from "@/public/assets/images";

const CoverSection = ({
  headingText,
  span,
}: {
  headingText: string;
  span: string;
}) => {
  return (
    <section className="cover">
      <div className="content">
        <h4>{headingText}</h4>
        <p>
          Home <i className="material-icons">circle</i>
          <span>{span}</span>
        </p>
      </div>

      <Image src={backgroundImage} alt="Background" />
    </section>
  );
};

export default CoverSection;
