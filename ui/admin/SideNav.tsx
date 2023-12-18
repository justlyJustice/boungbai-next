"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SideNav = ({}) => {
  const pathname = usePathname();

  return (
    <div className="overlay">
      <div className="sidebar">
        <div className="img__div">
          <i className="fa-solid fa-circle-user user-icon"></i>
        </div>

        <div className="links__div">
          <div className="link__contain">
            <Link
              className={`link ${pathname === "/dashboard" ? "active" : ""}`}
              href="/dashboard"
            >
              {/* <i className="fa-solid fa-shapes icon"></i> */}
              Dashboard
            </Link>
          </div>

          <div className="link__contain">
            <Link
              className={`link ${
                pathname === "/dashboard/upload-category" ? "active" : ""
              }`}
              href="/dashboard/upload-category"
            >
              <i className="fa-solid fa-draw-polygon icon"></i>
              Upload Category
            </Link>
          </div>

          <div className="link__contain">
            <Link
              className={`link ${
                pathname === "/dashboard/upload-course" ? "active" : ""
              }`}
              href="/dashboard/upload-course"
            >
              <i className="fa-solid fa-file-arrow-up icon"></i>
              Upload Course
            </Link>
          </div>

          <div className="link__contain">
            <Link
              className={`link ${
                pathname === "/dashboard/upload-video" ? "active" : ""
              }`}
              href="/dashboard/upload-video"
            >
              <i className="fa-solid fa-file-video icon"></i>
              Upload Video
            </Link>
          </div>

          <div className="link__contain">
            <Link
              className={`link ${
                pathname === "/dashboard/upload-post" ? "active" : ""
              }`}
              href="/dashbboard/upload-post"
            >
              <i className="fa-solid fa-file-lines icon"></i>
              Upload Post
            </Link>
          </div>

          <div className="link__contain">
            <Link
              className={`link ${
                pathname === "/dashboard/manage-users" ? "active" : ""
              }`}
              href="/dashboard/manage-users"
            >
              <i className="fa-solid fa-users-rectangle icon"></i>
              Manage Users
            </Link>
          </div>
        </div>

        <div className="logoutDiv">
          <div>
            <Link className="link" href="#">
              <i className="fa-solid fa-right-from-bracket icon"></i>
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
