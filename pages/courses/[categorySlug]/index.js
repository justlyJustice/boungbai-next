import CoverSection from "components/CoverSection";
import Head from "components/Head";
import Layout from "components/Layout";

import { getCategories, getCategory } from "services/categoryService";
import CategoryCard from "components/cards/CategoryCard";
import EmptyResults from "common/EmptyResults";

const Category = ({ category }) => {
  return (
    <Layout>
      <Head
        title={`Boungbai - ${category.name}`}
        description={category.description}
        image={category.image}
      />

      <CoverSection
        headingText="Our Courses"
        span={`Courses/${category && category.name} `}
      />

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
          {category && category.courses.length > 0 ? (
            category.courses.map((course) => (
              <>
                <CategoryCard
                  img={course.image}
                  key={course._id}
                  href={`/courses/${category.slug}/${course.slug}`}
                  name={course.name}
                />
              </>
            ))
          ) : (
            <EmptyResults />
          )}
        </div>
      </section>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const res = await getCategories();
  const { categories } = res.data;

  const categorySlugs = categories.map((category) => category.slug);

  const paths = categorySlugs.map((slug) => ({
    params: {
      categorySlug: slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const res = await getCategory(context.params.categorySlug);

  const { category } = res.data;

  return {
    props: {
      category,
    },
    revalidate: 1,
  };
};

export default Category;
