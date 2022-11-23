import React from 'react';

const PostComponent = () => {
  return (
    <div className="postItem">
      <h5 id="post" data-target="#collapseExample" data-toggle="collapse">
        <i className="fa fa-envelope"></i> Posts
      </h5>

      <div className="collapse customCollapse" id="collapseExample">
        <h6 className="post-sub-item">Create Post</h6>
        <h6 className="post-sub-item">View Posts</h6>
        <h6 className="post-sub-item">Delete a Post</h6>
      </div>
    </div>
  );
};

export default PostComponent;
