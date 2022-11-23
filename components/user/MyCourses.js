/* eslint-disable react-hooks/exhaustive-deps */
import LoadingAnimation from "common/LoadingAnimation";
import withApiData from "hoc/withApiData";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getCourse } from "services/courseService";
import UserDashboardWrapper from "./UserDashboardWrapper";

const MyCourses = ({ apiResponse }) => {
  const { courseName } = useParams();
  const { data, loading, request: loadCourse } = apiResponse;

  useEffect(() => {
    loadCourse(courseName);
  }, []);

  if (loading) return <LoadingAnimation loading={loading} />;

  return (
    <UserDashboardWrapper>
      <div className="welcome__text__contain">
        <h2>Welcome, Justice</h2>

        <p>
          MY DASHBOARD &gt;{" "}
          <span className="course-name">{courseName.toUpperCase()}</span>
        </p>
      </div>

      <div className="courses-lectures-contain">
        {data &&
          data.course.lectures &&
          data.course.lectures.reverse().map((lecture, index) => (
            <Link
              href={`/my/courses/${courseName}/${lecture.slug}`}
              className="all-brand"
              key={index}
            >
              <h4 className="brand-heading">
                <i className="material-icons">group_work</i>
                <span>{lecture.name}</span>
              </h4>

              <Link href="#" className="play-btn">
                Play <i className="fa-solid fa-play"></i>
              </Link>
            </Link>
          ))}
      </div>
    </UserDashboardWrapper>
  );
};

export default withApiData(MyCourses, getCourse);
