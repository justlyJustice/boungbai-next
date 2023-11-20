import CoverSection from "@/ui/common/Cover";
import CorporateInfo from "@/ui/corporate-overview/Info";

export default function CorporateOverviewPage() {
  return (
    <>
      <CoverSection
        headingText="Corporate Overview"
        span="Corporate Overview"
      />

      <CorporateInfo />
    </>
  );
}
