import CorporateInfo from "components/CorporateInfo";

import CoverSection from "components/CoverSection";
import Head from "components/Head";
import Layout from "components/Layout";

const CorporateOverview = () => {
  return (
    <Layout>
      <Head
        title="Boungbai | Corporate Overview"
        description="We believe in living in the future and consistently creating benchmarks of excellence. Guided and inspired by a broad vision such as this; Boungbai Computers, has the mission to take every step necessary to achieve set aims/goals/objectives notwithstanding the cost."
        image="/images/web-logo.png"
      />

      <CoverSection
        headingText="Corporate Overview"
        span="Corporate Overview"
      />
      <CorporateInfo />
    </Layout>
  );
};

export default CorporateOverview;
