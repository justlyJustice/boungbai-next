import { useState } from "react";

import AdminWrapper from "components/admin/AdminWrapper";

import { getCourses } from "services/courseService";
import { uploadLecture } from "services/lectureService";
import Head from "components/Head";

const initialState = {
  name: "",
  courseId: 0,
};

const UploadVideo = ({ courses }) => {
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [file, setFile] = useState(null);
  const [values, setValues] = useState(initialState);
  const [showMenu, setShowMenu] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onFileChange = ({ target }) => {
    setFile(target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tutorial = { name: values.name, file };

    setUploading(true);
    const res = await uploadLecture(values.courseId, tutorial);
    setUploading(false);

    if (!res.ok) {
      setUploading(false);
      return console.log(res);
    }

    setSuccess(true);
    console.log(res);

    /* Reset the state */
    setValues((prev) => prev);

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  };

  return (
    <AdminWrapper showMenu={showMenu} setShowMenu={setShowMenu}>
      <Head
        title={`Dashboard - Video Upload`}
        description={`Manage existing, and upload videos`}
        image={`/images/web-logo.png`}
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
            <p>Manage existing, and upload videos</p>
          </div>
        </div>

        <div className="form__contain">
          <form onSubmit={handleSubmit}>
            <div className="form__group">
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                required
                placeholder="Enter course name here..."
              />
            </div>

            <div className="form__group">
              <select
                name="courseId"
                onChange={handleChange}
                required
                value={values.courseId}
              >
                <option value="0">Select Course</option>
                {courses &&
                  courses.length > 0 &&
                  courses.map((course) => (
                    <option key={course._id} value={course._id}>
                      {course.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="form__group">
              <input
                type="file"
                name="file"
                accept="video/mp4"
                id="file"
                onChange={onFileChange}
              />
            </div>

            <button
              type="submit"
              className={success ? "upload-btn success" : "upload-btn"}
              disabled={uploading}
            >
              {uploading ? (
                <>
                  Uploading <i className="fa-solid fa-spinner fa-spin"></i>
                </>
              ) : (
                <>
                  Upload <i className="fa-solid fa-arrow-up-from-bracket"></i>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </AdminWrapper>
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

export default UploadVideo;
