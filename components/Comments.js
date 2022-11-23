// Module Imports
import { useEffect, useState } from "react";
import { create } from "apisauce";

// Component Imports
import { AppForm, SubmitButton, TextArea } from "./forms";
import { Container } from "styles/js/commentStyles";
import CommentsDisplay from "./CommentsDisplay";

// Service Imports
import { getPostComments } from "services/postService";

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments();
    // eslint-disable-next-line
  }, []);

  const getComments = async () => {
    try {
      const { data } = await getPostComments(id);

      setComments(data["data"]["comments"]);
    } catch (ex) {
      console.log(ex);
    }
  };

  const handleSubmit = async (comment) => {
    create({
      baseURL: "https://afternoon-journey-63128.herokuapp.com/api",
    })
      .post(`/posts/${id}/comments`, comment)
      .then(({ data }) => {
        setComments([...comments, data.data]);
        window.location = "/blog";
      })
      .catch((ex) => console.log(ex));
  };

  return (
    <>
      {comments.map((comment) => (
        <CommentsDisplay comment={comment} key={comment._id} />
      ))}

      <div className="commentDiv">
        <h3 className="h4">
          Comment
          <hr />
        </h3>

        <AppForm
          initialValues={{
            text: "",
            userId: "60d9e90664b9c000151b72a3",
          }}
          onSubmit={handleSubmit}
        >
          <Container>
            <TextArea name="text" placeholder="Comments Here" />
          </Container>

          <SubmitButton title="Post Comment" className="commentBtn" />
        </AppForm>
      </div>
    </>
  );
};

export default Comments;
