"use client";
import { useState } from "react";

import { FirstModal, SecondModal, ThirdModal } from "./BrandModals";

const AllBrands = () => {
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showThirdModal, setShowThirdModal] = useState(false);

  return (
    <>
      <div className="brands-container">
        <div className=" brand-detail-wrapper wrapper1">
          <h2 className="brand-detail-title">
            WHOBEWHO IN I.C.T.
            <hr />
          </h2>

          <p className="brand-detail-content">
            This is an annual contest among I.C.T talents to be awarded and
            encourage to stand tall in the world. It serves as a talent...
          </p>

          <button onClick={() => setShowFirstModal(true)}>Read More</button>
        </div>

        <div className=" brand-detail-wrapper wrapper2">
          <h2 className="brand-detail-title">
            IZONCODE KIDS
            <hr />
          </h2>

          <p className="brand-detail-content">
            The best way to build any society is to begin with the young and
            make them just as good as possible ‘Socrates’. IzonCodeKids...
          </p>

          <button onClick={() => setShowSecondModal(true)}>Read More</button>
        </div>

        <div className=" brand-detail-wrapper wrapper3">
          <h2 className="brand-detail-title">
            BAYELSA WOMEN IN I.C.T.
            <hr />
          </h2>

          <p className="brand-detail-content">
            Women are encouraged to be proactive in the industry by doing the
            needful to compete anywhere...
          </p>

          <button onClick={() => setShowThirdModal(true)}>Read More</button>
        </div>
      </div>

      <FirstModal setShowModal={setShowFirstModal} showModal={showFirstModal} />

      <SecondModal
        setShowModal={setShowSecondModal}
        showModal={showSecondModal}
      />

      <ThirdModal setShowModal={setShowThirdModal} showModal={showThirdModal} />
    </>
  );
};

export default AllBrands;