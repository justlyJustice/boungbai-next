import AllBrands from "../../ui/brands/AllBrands";
import CoverSection from "../../ui/common/Cover";

export default function BrandsPage() {
  return (
    <>
      <CoverSection headingText="Our Brands" span="Brands" />

      <section className="pages">
        <AllBrands />
      </section>
    </>
  );
}
