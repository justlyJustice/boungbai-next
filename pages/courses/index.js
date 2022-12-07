import CoverSection from "components/CoverSection";
import Head from "components/Head";

import { getCategories } from "services/categoryService";

import CategoryCard from "components/cards/CategoryCard";

import { webLogo } from "public/images";

const Courses = ({ categories }) => {
  return (
    <>
      <Head
        title="Boungbai | Our Courses"
        description="Explore all boungbai courses"
        image={webLogo}
      />

      <CoverSection headingText="Our Courses" span="Courses" />

      <section className="courses">
        <style jsx="true">
          {`
            .link {
              text-decoration: none !important;
            }

            .link:hover {
              text-decoration: none !important;
            }
          `}
        </style>

        <div className="containerDiv">
          {categories &&
            categories.map((category) => (
              <CategoryCard
                img={category.image}
                name={category.name}
                href={`/courses/${category.slug}`}
                key={category._id}
              />
            ))}
        </div>
      </section>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await getCategories();

  const { categories } = res.data;

  return {
    props: {
      categories,
    },
    revalidate: 1,
  };
};

export default Courses;
