import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="side__content">
      <div className="side__top__contain">
        <div>
          <i
            className="fa-solid fa-bars vertical toggle-icon"
            // onClick={() => setShowMenu(true)}
          ></i>
        </div>

        <div className="text-contain">
          <h2>Welcome, Admim</h2>
        </div>
      </div>

      <div className="cards">
        <Link className="small-card big" href={`/dashboard/upload-category`}>
          <div className="card-icon">
            <i className="fa-solid fa-file-video"></i>
          </div>

          <h4>Upload Category</h4>
        </Link>

        <Link className="small-card" href={`/upload/video`}>
          <div className="card-icon">
            <i className="fa-solid fa-file-video"></i>
          </div>
          <h4>Upload Video</h4>
        </Link>

        <Link className="small-card" href={`/upload/video`}>
          <div className="card-icon">
            <i className="fa-solid fa-file-video"></i>
          </div>
          <h4>Upload Video</h4>
        </Link>

        <Link className="small-card" href={`/upload/video`}>
          <div className="card-icon">
            <i className="fa-solid fa-file-video"></i>
          </div>
          <h4>Upload Video</h4>
        </Link>

        <Link className="small-card" href={`/upload/video`}>
          <div className="card-icon">
            <i className="fa-solid fa-file-video"></i>
          </div>
          <h4>Upload Video</h4>
        </Link>
      </div>
    </div>
  );
}
