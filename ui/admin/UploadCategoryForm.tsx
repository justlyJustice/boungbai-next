"use client";

import { ChangeEvent, FormEvent, useState } from "react";

const UploadCategoryForm = () => {
  // const [values, setValues] = useState<{ [name: string]: string }>();
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  // const [image, setImage] = useState(null);

  // const {
  //   data,
  //   submit: upload,
  //   submitting: uploading,
  //   error,
  //   success,
  // } = useSubmit(uploadCategory);

  const addNewCategory = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("/api/categories", {
      method: "POST",
      body: JSON.stringify({ name, image: file }),
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <form onSubmit={addNewCategory}>
      <div className="form__group">
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          placeholder="Enter category name here..."
          required
        />
      </div>

      <div className="form__group">
        <input
          type="text"
          id="file"
          placeholder="Enter file url here"
          value={file}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFile(e.target.value)
          }
          required
        />
      </div>

      <button
        type="submit"
        // disabled={uploading}
        className="upload-btn"
      >
        Upload
        {/* {uploading ? (
        <i className="fa-solid fa-spinner fa-spin"></i>
      ) : (
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
      )} */}
      </button>
    </form>
  );
};

export default UploadCategoryForm;
