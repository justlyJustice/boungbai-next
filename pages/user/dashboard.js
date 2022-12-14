import { useState } from "react";
import Link from "next/link";

import UserDashboardWrapper from "components/user/UserDashboardWrapper";
import { getCourses } from "services/courseService";
import useUser from "hooks/useUser";

const UserDashboard = ({ courses }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { user } = useUser();
  /*   const {
    data: { courses },
    loading,
    request: loadCourses,
  } = apiResponse;
 

  useEffect(() => {
    loadCourses();
  }, []);
 */

  return (
    <UserDashboardWrapper
      showSideBar={showMenu}
      setShowSideBar={setShowMenu}
      courses={courses}
    >
      <div className="welcome__text__contain">
        <div>
          <h2>Welcome, {user && user.name}</h2>
          <p>My Dashboard</p>
        </div>

        <div>
          <i
            className="fa-solid fa-ellipsis-vertical toggle-icon"
            onClick={() => setShowMenu(true)}
          ></i>
        </div>
      </div>

      <div className="cards">
        {courses &&
          courses.length > 0 &&
          courses.map((course) => (
            <Link
              className="card"
              href={`/user/courses/${course.slug}`}
              key={course._id}
            >
              <i className="fa-solid fa-video icon"></i>

              <h4>{course.name}</h4>
            </Link>
          ))}
      </div>
    </UserDashboardWrapper>
  );
};

export const getStaticProps = async () => {
  const { data } = await getCourses();

  return {
    props: {
      courses: data.courses,
    },
  };
};

export default UserDashboard;
