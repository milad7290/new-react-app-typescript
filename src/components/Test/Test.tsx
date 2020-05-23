import React from "react";
import { ErrorBoundary } from "../../helper/ErrorBoundary/ErrorBoundary";
import WithLoading from "../../helper/WithLoading/WithLoading";
import { Post } from "../../models/post.model";
import SubTest from "../Subtest/Subtest";
import "./Test.scss";

interface TestProps {
  postList: Post[];
}

interface TestStates {}

const Test = (props: TestProps) => {
  const { postList } = props;

  return (
    <div className="App">
      <header className="App-header">
        <p>aaaalebaaama</p>
        <ErrorBoundary>
          <SubTest postList={postList}></SubTest>
        </ErrorBoundary>
      </header>
    </div>
  );
};

export default WithLoading(Test);
