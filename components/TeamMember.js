import React from "react";

import { emmaPic, clarkPic, adakaPic, victoryPic } from "public/images";

import Image from "next/image";

const TeamMember = ({ image, name, position, department }) => {
  const images = {
    emma: emmaPic,
    clark: clarkPic,
    adaka: adakaPic,
    victory: victoryPic,
  };

  return (
    <div className="team-member">
      <Image width={80} height={100} src={images[image]} alt={name + " Pic"} />

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
