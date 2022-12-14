import ProductsSection from "components/ProductsSection";
import CoverSection from "components/CoverSection";
import Head from "components/Head";

import { webLogo } from "public/images";
import webUrl from "config/webUrl";
import Layout from "components/Layout";

const Products = () => {
  return (
    <Layout>
      <Head
        title="Boungbai | Our Products"
        description="Explore our outstanding products"
        image="/images/web-logo.png"
      />

      <CoverSection headingText="Our Products" span="Products" />

      <ProductsSection />
    </Layout>
  );
};

export default Products;
