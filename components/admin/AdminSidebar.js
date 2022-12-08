/* eslint-disable no-unused-vars */
import Link from "next/link";

/* import authService from "services/authService"; */

const AdminSidebar = ({ showMenu, setShowMenu }) => {
  /*  const handleLogout = () => {
    authService.logout();

    window.location = "/auth/admin";
  }; */

  const handleLogout = () => {};

  return (
    <div className={showMenu ? "overlay show" : "overlay"}>
      <div className="sidebar">
        <div className="img__div">
          <i className="fa-solid fa-circle-user user-icon"></i>
        </div>
        <div className="links__div">
          <div className="link__contain">
            <Link
              className={({ isActive }) => (isActive ? "link active" : "link")}
              href="/dashboard"
            >
              <i className="fa-solid fa-shapes icon"></i>
              Dashboard
            </Link>
            <hr />
          </div>
          <div className="link__contain">
            <Link
              className={({ isActive }) => (isActive ? "link active" : "link")}
              href="/upload/category"
            >
              <i className="fa-solid fa-draw-polygon icon"></i>
              Upload Category
            </Link>
            <hr />
          </div>
          <div className="link__contain">
            <Link
              className={({ isActive }) => (isActive ? "link active" : "link")}
              href="/upload/course"
            >
              <i className="fa-solid fa-file-arrow-up icon"></i>
              Upload Course
            </Link>
            <hr />
          </div>

          <div className="link__contain">
            <Link
              className={({ isActive }) => (isActive ? "link active" : "link")}
              href="/upload/video"
            >
              <i className="fa-solid fa-file-video icon"></i>
              Upload Video
            </Link>
            <hr />
          </div>
          <div className="link__contain">
            <Link
              className={({ isActive }) => (isActive ? "link active" : "link")}
              href="/upload/post"
            >
              <i className="fa-solid fa-file-lines icon"></i>
              Upload Post
            </Link>
            <hr />
          </div>
          <div className="link__contain">
            <Link
              className={({ isActive }) => (isActive ? "link active" : "link")}
              href="/users/manage"
            >
              <i className="fa-solid fa-users-rectangle icon"></i>
              Manage Users
            </Link>
            <hr />
          </div>
        </div>

        <div className="logoutDiv">
          <div>
            <Link className="link" href="#" onClick={handleLogout}>
              <i className="fa-solid fa-right-from-bracket icon"></i>
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
