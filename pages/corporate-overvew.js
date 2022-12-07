import CorporateInfo from "components/CorporateInfo";

import CoverSection from "components/CoverSection";
import Head from "components/Head";
import webUrl from "config/webUrl";

import { webLogo } from "public/images";

const CorporateOverview = () => {
  return (
    <>
      <Head
        title="Boungbai | Corporate Overview"
        description="We believe in living in the future and consistently creating benchmarks of excellence. Guided and inspired by a broad vision such as this; Boungbai Computers, has the mission to take every step necessary to achieve set aims/goals/objectives notwithstanding the cost."
        image={webUrl + webLogo}
      />

      <CoverSection
        headingText="Corporate Overview"
        span="Corporate Overview"
      />
      <CorporateInfo />
    </>
  );
};

export default CorporateOverview;
