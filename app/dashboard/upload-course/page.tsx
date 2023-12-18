export default async function UploadCourse() {
  const res = await fetch("http://localhost:3000/api/categories");
  const { data: categories } = await res.json();

  const handleSubmit = () => {};

  return (
    <>
      <div className="side__content">
        <div className="side__text__contain">
          <h2>Welcome, Admin</h2>
          <p>Manage existing, and upload new courses</p>
        </div>

        <div className="form__contain">
          <form>
            <div className="form__group">
              {/* <div className="form__group">
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
              <input
                type="file"
                name="file"
                id="file"
                onChange={onFileChange}
                required
              />

              <input
                type="text"
                name="author"
                value={values.author}
                onChange={handleChange}
                required
                placeholder="Enter author name here..."
              />
            </div>

            <div className="form__group">
              <input
                type="number"
                name="price"
                value={values.price}
                onChange={handleChange}
                required
                placeholder="Enter price here..."
              /> */}

              <select
                name="categoryId"
                // onChange={handleChange}
                required
              >
                <option value="empty">Select Category</option>
                {categories &&
                  categories.length > 0 &&
                  categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
              </select>
            </div>

            {/* <div className="form__group">
              <textarea
                name="description"
                placeholder="Enter description..."
                id="description"
                onChange={handleChange}
                value={values.description}
                required
              />
            </div>

            <button
              type="submit"
              className={success ? "upload-btn success" : "upload-btn"}
              disabled={submitting}
            >
              Upload{" "}
              {submitting ? (
                <i className="fa-solid fa-spinner fa-spin"></i>
              ) : (
                <i className="fa-solid fa-arrow-up-from-bracket"></i>
              )}
            </button> */}
            {/* </div> */}
          </form>
        </div>
      </div>
    </>
  );
}
