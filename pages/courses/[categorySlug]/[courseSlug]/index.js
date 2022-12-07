import CoverSection from "components/CoverSection";
import Head from "components/Head";

import { getCourse, getCourses } from "services/courseService";
import PayStackIntegration from "components/PayStackIntegration";
import { getCategories } from "services/categoryService";

const CourseDetails = ({ course }) => {
  return (
    <>
      <CoverSection headingText={course.name} span={`OUR COURSES`} />

      <>
        <Head
          title={`Boungbai - ${course.name}`}
          description={course.description}
          image={course.image}
        />

        <section className="course-details">
          <h3>
            Course <span>Description</span>
          </h3>

          <p>{course.description}</p>
        </section>

        <section className="preview-section">
          <h3 className="preview-section">Course Preview</h3>

          <div className="video-contain">
            <video controls>
              <source
                src={course.lectures.reverse()[0].video}
                type="video/mp4"
              />
            </video>
          </div>
        </section>

        <section className="enroll-section">
          <h4>Course Pre-requsites</h4>

          <p>
            Don{`'`}t worry if you{`'`}re a complete beginner. You don{`'`}t
            need any experience with {course.name}, <br /> even the very first
            steps are covered in detail here.
          </p>

          <PayStackIntegration course={course} />
        </section>
      </>
    </>
  );
};

export const getStaticPaths = async (context) => {
  const res = await getCourses();
  const {
    data: { categories },
  } = await getCategories();

  const { courses } = res.data;

  const courseSlugs = courses.map((course) => course.slug);
  const categorySlugs = categories.map((category) => category.slug);

  const paths = categorySlugs.map((categorySlug) => {
    return courseSlugs.map((courseSlug) => {
      return {
        params: {
          courseSlug,
          categorySlug,
        },
      };
    });
  });

  return {
    paths: [
      {
        params: {
          courseSlug: `css`,
          categorySlug: `web-development-and-hosting`,
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const res = await getCourse(context.params.courseSlug);

  return {
    props: {
      course: res.data.course,
    },
    revalidate: 1,
  };
};

export default CourseDetails;
