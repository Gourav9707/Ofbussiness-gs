import React from "react";
import "./Issue.scss";
import Markdown from "./Markdown";
import Comments from "./Comments";

const Issue = (props) => {
  return (
    <React.Fragment>
      <Markdown repoURL={props.location.details.issue.repository_url} />
      <Comments commentsURL={props.location.details.issue.comments_url} />
    </React.Fragment>
  );
};
export default Issue;
