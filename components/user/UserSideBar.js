import Link from "next/link";

import { userPng } from "public/images";
import useUser from "hooks/useUser";
import Image from "next/image";

const UserSidebar = ({ showSideBar, setShowSideBar }) => {
  const { user } = useUser();
  /* const { courses } = useCourses();

  const userCourses =
    courses &&
    courses.filter(
      (course) =>
        course._id == user.savedCourses.map((savedCourse) => savedCourse)
    ); */

  const handleLogout = () => {};

  return (
    <div className={showSideBar ? "user__sidebar show" : "user__sidebar"}>
      <i
        className="fa-solid fa-xmark close-icon"
        onClick={() => setShowSideBar(false)}
      ></i>

      <div className="img__div">
        <Image src={userPng} alt="User" width={100} />
      </div>

      <div className="links__div">
        <Link className="link" href="/user/courses">
          <i className="fa-solid fa-laptop-file icon"></i>

          <hr />

          <span> My Courses</span>
        </Link>

        {/*  {userCourses &&
          userCourses.map((course) => (
            <Link
              className={({ isActive }) => (isActive ? "link active" : "link")}
              key={course._id}
              href={`/user/courses/${course.slug}`}
            >
              <i className="fa-solid fa-laptop-file icon"></i>

              <hr />

              <span> {course.name}</span>
            </Link>
          ))} */}
      </div>

      <>
        <Link
          className="logout-link text-white"
          onClick={handleLogout}
          href="#"
        >
          <i className="text-dark fa-solid fa-right-from-bracket icon"></i>

          <span className="text-dark mx-2">
            <b>LOGOUT</b>
          </span>
        </Link>
      </>
    </div>
  );
};

export default UserSidebar;
