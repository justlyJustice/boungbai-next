import React from "react";

const PostForm = () => {
  return (
    <div className="postForm">
      <h2>Make a blog post</h2>

      <form
        encType="multipart/form-data"
        method="POST"
        action={`${process.env.REACT_APP_URL}/posts`}
      >
        <div className="postGroup">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" name="title" autoFocus />
        </div>

        <div className="postGroup">
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description"></textarea>
        </div>

        <div className="postGroup">
          <label htmlFor="file">Post Image</label>

          <input type="file" name="file" id="file" />
        </div>

        <button type="submit">
          Post <i className="fa fa-send"></i>
        </button>
      </form>
    </div>
  );
};

export default PostForm;
