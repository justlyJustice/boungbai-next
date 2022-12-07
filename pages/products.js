import ProductsSection from "components/ProductsSection";
import CoverSection from "components/CoverSection";
import Head from "components/Head";

import { webLogo } from "public/images";
import webUrl from "config/webUrl";

const Products = () => {
  return (
    <>
      <Head
        title="Boungbai | Our Products"
        description="MonitorMe. What is MonitorMe? MonitorMe is a web-app built out of the need to bridge trust between Project Host Communities, Contracting Firms and Project awarding Agencies/Institutes."
        image={webUrl + webLogo}
      />

      <CoverSection headingText="Our Products" span="Products" />

      <ProductsSection />
    </>
  );
};

export default Products;
