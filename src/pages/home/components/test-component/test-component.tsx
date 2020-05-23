import React from "react";
import { ErrorBoundary } from "../../../../helper/error-boundary/error-boundary";
import WithLoading from "../../../../helper/loading-section/loading-section";
import SubTestComponent from "./subtest-component/subtest-component";
import "./test-component.scss";
import { Post } from "../../../../models/post.model";

interface TestComponentProps {
  postList: Post[];
}

interface TestComponentStates {}

const TestComponent = (props: TestComponentProps) => {
  const { postList } = props;

  return (
    <div className="App">
      <header className="App-header">
        <p>aaaalebaaama</p>
        <ErrorBoundary>
          <SubTestComponent postList={postList}></SubTestComponent>
        </ErrorBoundary>
      </header>
    </div>
  );
};

export default WithLoading(TestComponent);
