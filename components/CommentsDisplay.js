import React from "react";
import { FaUser } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CommentsDisplay = ({ comment }) => {
  return (
    <div className="comment-contain">
      <div
        style={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <div alignItems="center">
          <div>
            {comment.user.image ? (
              <LazyLoadImage alt="Remy Sharp" src={comment.user.image} />
            ) : (
              <div className="post-icon-contain">
                <FaUser className="icon" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsDisplay;
