import CoverSection from "components/CoverSection";
import Head from "components/Head";

import { getCourse, getCourses } from "services/courseService";
import PayStackIntegration from "components/PayStackIntegration";
import Layout from "components/Layout";

const CourseDetails = ({ course }) => {
  return (
    <Layout>
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
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const {
    data: { courses },
  } = await getCourses();

  const paths = courses.map((course) => ({
    params: {
      categorySlug: course.category.slug,
      courseSlug: course.slug,
    },
  }));

  return {
    paths,
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
