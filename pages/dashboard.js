import { useState } from "react";
import Link from "next/link";
import AdminWrapper from "components/admin/AdminWrapper";

import Head from "components/Head";

const AdminDashboard = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <AdminWrapper showMenu={showMenu} setShowMenu={setShowMenu}>
      <Head
        title="Admin Dashboard"
        image="/images/web-logo.png"
        description={`Manage courses`}
      />

      <div className="side__content">
        <div className="side__top__contain">
          <div>
            <i
              className="fa-solid fa-bars vertical toggle-icon"
              onClick={() => setShowMenu(true)}
            ></i>
          </div>

          <div className="text-contain">
            <h2>Welcome Admin</h2>
            <p>Admin Dashboard</p>
          </div>
        </div>

        <div className="cards">
          <Link className="card" href={`/upload/video`}>
            <i className="fa-solid fa-file-video"></i>
            <h4>Upload Video</h4>
          </Link>

          <Link className="card" href={`/upload/category`}>
            <i className="fa-solid fa-draw-polygon"></i>
            <h4>Upload Category</h4>
          </Link>

          <Link className="card" href={`/upload/course`}>
            <i className="fa-solid fa-file-upload"></i>
            <h4>Upload Course</h4>
          </Link>

          <Link className="card" href={`/upload/post`}>
            <i className="fa-solid fa-file-lines"></i>
            <h4>Upload Post</h4>
          </Link>
        </div>
      </div>
    </AdminWrapper>
  );
};

export default AdminDashboard;
