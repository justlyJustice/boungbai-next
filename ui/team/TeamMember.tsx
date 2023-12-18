import Image, { StaticImageData } from "next/image";

type TeamMemberProps = {
  name: string;
  position: string;
  department: string;
  image: string | StaticImageData;
};

const TeamMember = ({ image, name, position, department }: TeamMemberProps) => {
  return (
    <div className="team-member">
      <Image src={image} alt="Team Member Pic" />

      <div className="title">
        <h5>{name}</h5>

        <p>
          {position},
          <br /> {department}
        </p>
      </div>
    </div>
  );
};

export default TeamMember;
