import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { getComments } from "../api/api";
import "./Comments.scss";

const Comments = (props) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(props.commentsURL).then((res) => setComments(res.data));
  }, [props.commentsURL]);

  return (
    <div className="Comments">
      <h3>Comments: </h3>
      {comments.map((comment) => {
        return (
          <React.Fragment key={comment.id}>
            <div className="CommentBody">
              <span className="User">{comment.user.login}</span>
              <ReactMarkdown
                source={comment.body}
                escapeHtml={true}
                className="CommentsMarkdown"
              />
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Comments;
