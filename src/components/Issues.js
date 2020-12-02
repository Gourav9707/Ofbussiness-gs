import React from "react";
import "./Issue.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

const Issues = (props) => {
  return (
    <div className="Issues">
      {props.issues.map((issue) => {
        return (
          <div className="Issue" key={issue.id}>
            <div className="header d-inline">
              <span className="status">
                {issue.state === "open" ? (
                  <FontAwesomeIcon icon={faExclamationCircle} />
                ) : (
                  <FontAwesomeIcon icon={faCheckCircle} />
                )}
              </span>
              <h5 className="title d-inline">{issue.title}</h5>
            </div>

            <div className="labels d-inline">
              {issue.labels.length
                ? issue.labels.map((label) => {
                    return (
                      <span
                        key={label.id}
                        style={{ backgroundColor: `#${label.color}` }}
                        className="label"
                      >
                        {label.name}
                      </span>
                    );
                  })
                : null}
            </div>

            <div className="infoTicket">
              <span className="id">#${issue.id}</span>
              <span className="createdAt">opened {issue.created_at}</span>
              <span className="by">by {issue.user.login}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Issues;
