import { useState } from "react";
import AdminWrapper from "components/admin/AdminWrapper";

import { uploadPost } from "services/postService";
import Head from "components/Head";

const UploadPost = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [file, setFile] = useState(null);
  const [values, setValues] = useState({
    title: "",
    description: "",
  });

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

    setLoading(true);
    const res = await uploadPost({ ...values, image: file });
    setLoading(false);

    if (!res.ok) {
      return console.log(res);
    }

    setSuccess(true);
    console.log(res);

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  };

  return (
    <AdminWrapper>
      <Head
        title={`Dashboard - Post Upload`}
        description={`Manage existing, and upload blog posts`}
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
            <p>Manage existing, and upload blog posts</p>
          </div>
        </div>

        <div className="form__contain">
          <form onSubmit={handleSubmit}>
            <div className="form__flex">
              <div className="form__group">
                <input
                  type="text"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  id=""
                  required
                  placeholder="Enter post title..."
                />
              </div>

              <div className="form__group">
                <input
                  required
                  type="file"
                  onChange={onFileChange}
                  name="file"
                  id="file"
                />
              </div>
            </div>

            <div className="form__group">
              <textarea
                onChange={handleChange}
                value={values.description}
                name="description"
                rows="4"
                required
                placeholder="Enter post description..."
              ></textarea>
            </div>

            <button
              type="submit"
              className={success ? "upload-btn success" : "upload-btn"}
              disabled={loading}
            >
              Upload{" "}
              {loading ? (
                <i className="fa-solid fa-spinner fa-spin"></i>
              ) : (
                <i className="fa-solid fa-arrow-up-from-bracket"></i>
              )}
            </button>
          </form>
        </div>
      </div>
    </AdminWrapper>
  );
};

export default UploadPost;
