/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
/* import authService from "services/authService"; */

const AdminSidebar = ({ showMenu, setShowMenu }) => {
  /*  const handleLogout = () => {
    authService.logout();

    window.location = "/auth/admin";
  }; */

  /*  return (
    <div className={showMenu ? "overlay show" : "overlay"}>
      <div className="sidebar">
        <div className="img__div">
          <i className="fa-solid fa-circle-user user-icon"></i>
        </div>
        <div className="links__div">
          <div className="link__contain">
            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              href="/admin"
            >
              <i className="fa-solid fa-shapes icon"></i>
              Dashboard
            </NavLink>
            <hr />
          </div>
          <div className="link__contain">
            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              href="/upload/category"
            >
              <i className="fa-solid fa-draw-polygon icon"></i>
              Upload Category
            </NavLink>
            <hr />
          </div>
          <div className="link__contain">
            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              href="/upload/course"
            >
              <i className="fa-solid fa-file-arrow-up icon"></i>
              Upload Course
            </NavLink>
            <hr />
          </div>

          <div className="link__contain">
            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              href="/upload/video"
            >
              <i className="fa-solid fa-file-video icon"></i>
              Upload Video
            </NavLink>
            <hr />
          </div>
          <div className="link__contain">
            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              href="/upload/post"
            >
              <i className="fa-solid fa-file-lines icon"></i>
              Upload Post
            </NavLink>
            <hr />
          </div>
          <div className="link__contain">
            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              href="/users/manage"
            >
              <i className="fa-solid fa-users-rectangle icon"></i>
              Manage Users
            </NavLink>
            <hr />
          </div>
        </div>

        <div className="logoutDiv">
          <div>
            <NavLink className="link" href="#" onClick={handleLogout}>
              <i className="fa-solid fa-right-from-bracket icon"></i>
              Logout
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  ); */

  return null;
};

export default AdminSidebar;
