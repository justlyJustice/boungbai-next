/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import LoadingAnimation from "common/LoadingAnimation";
import withApiData from "hoc/withApiData";
import UserDashboardWrapper from "./UserDashboardWrapper";
import { getLecture } from "services/lectureService";
import { useDownload } from "hooks/useDownload";

const CourseVideo = ({ apiResponse }) => {
  const { courseName, lectureName } = useParams();
  const {
    data: { lecture },
    loading: fetching,
    request: loadLecture,
  } = apiResponse;

  const { download, downloading } = useDownload(
    lecture && lecture.video,
    lecture && lecture.name
  );

  useEffect(() => {
    loadLecture(lectureName);
  }, []);

  if (fetching) return <LoadingAnimation loading={fetching} />;

  return (
    <UserDashboardWrapper>
      <div className="welcome__text__contain">
        <h2>Welcome, Justice</h2>

        <p>
          My Dasboard{" "}
          <span className="course-name"> &gt; {courseName.toUpperCase()}</span>
          <span className="lecture-name">
            {" "}
            &gt; {lectureName.toUpperCase()}
          </span>
        </p>
      </div>

      <div className="courses-lectures-contain">
        <div className="video-contain">
          <video width="320" height="240" controls>
            <source src={lecture && lecture.video} type="video/mp4" />
          </video>

          <button
            onClick={() => download()}
            disabled={downloading}
            className="btn btn-primary btn-lg"
          >
            {downloading ? (
              <>
                Downloading{"  "}
                <i className="fa-solid fa-spinner fa-spin text-white"></i>
              </>
            ) : (
              <>
                Download{"  "}
                <i className="fa-solid fa-download text-white"></i>
              </>
            )}
          </button>
        </div>
      </div>
    </UserDashboardWrapper>
  );
};

export default withApiData(CourseVideo, getLecture);
