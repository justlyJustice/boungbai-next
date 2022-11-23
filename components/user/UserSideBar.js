/* eslint-disable eqeqeq */
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { userPng } from "assets/images";
import useUser from "hooks/useUser";
import useCourses from "hooks/useCourses";

const UserSidebar = ({ showSideBar, setShowSideBar }) => {
  const { user } = useUser();
  const { courses } = useCourses();

  const userCourses =
    courses &&
    courses.filter(
      (course) =>
        course._id == user.savedCourses.map((savedCourse) => savedCourse)
    );

  const handleLogout = () => {};

  return (
    <div className={showSideBar ? "user__sidebar show" : "user__sidebar"}>
      <i
        className="fa-solid fa-xmark close-icon"
        onClick={() => setShowSideBar(false)}
      ></i>

      <div className="img__div">
        <LazyLoadImage src={userPng} alt="User" />
      </div>

      <div className="links__div">
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          href="/dashboard"
        >
          <i className="fa-solid fa-laptop-file icon"></i>

          <hr />

          <span> My Courses</span>
        </NavLink>

        {userCourses &&
          userCourses.map((course) => (
            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              key={course._id}
              href={`/user/courses/${course.slug}`}
            >
              <i className="fa-solid fa-laptop-file icon"></i>

              <hr />

              <span> {course.name}</span>
            </NavLink>
          ))}
      </div>

      <>
        <NavLink
          className="logout-link text-white"
          onClick={handleLogout}
          href="#"
        >
          <i className="text-dark fa-solid fa-right-from-bracket icon"></i>

          <span className="text-dark mx-2">
            <b>LOGOUT</b>
          </span>
        </NavLink>
      </>
    </div>
  );
};

export default UserSidebar;
