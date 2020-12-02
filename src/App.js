import React, { useEffect, useState } from "react";
import "./styles.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import Nav from "./components/Navbar";
//API
import { getIssues } from "./api/api";
import Issues from "./components/Issues";
import Pagination from "./components/Pagination";

export default function App() {
  const [issues, setIssues] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [issuesPerPage, setIssuesPerPage] = useState(10);
  const [watch, setWatch] = useState(0);
  const [star, setstar] = useState(0);
  const [fork, setFork] = useState(0);

  const handlestar = () => {
    let copystar = star + 1;
    console.log(copystar);
    setstar(copystar);
  };
  const handlewatch = () => {
    let copywatch = watch + 1;
    setWatch(copywatch);
  };
  const handlefork = () => {
    let copyfork = fork + 1;
    setFork(copyfork);
  };

  useEffect(() => {
    getIssues().then((res) => {
      setIssues(res);
    });
  }, []);

  const fetchMoreData = () => {
    let copyissueperpage = issuesPerPage;
    setIssuesPerPage(copyissueperpage + 10);
  };

  //get current issues
  const indexOfLastIssue = currentPage * issuesPerPage;
  const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
  const currentIssues = issues.slice(indexOfFirstIssue, indexOfLastIssue);

  return (
    <div className="App">
      <Nav
        watch={watch}
        fork={fork}
        star={star}
        handlefork={handlefork}
        handlestar={handlestar}
        handlewatch={handlewatch}
      />
      {/* <h1>Simplified version of github issue page</h1> */}
      <InfiniteScroll
        dataLength={issuesPerPage}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <Issues issues={currentIssues} />
        <Pagination
          issuesPerPage={issuesPerPage}
          totalIssues={issues.length}
          currentPage
        />
      </InfiniteScroll>
    </div>
  );
}
