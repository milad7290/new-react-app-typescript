// import PropTypes from "prop-types";
import React from "react";
import { Post } from "../../models/post.model";
import "./Subtest.scss";

interface SubTestProps {
  postList: Post[];
}

interface SubTestStates {}

const SubTest = (props: SubTestProps) => {
  const { postList } = props;
  // const { activeStep } = this.state;

  return (
    <div className="App">
      <header className="App-header">
        {postList.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </header>
    </div>
  );
};

export default SubTest;
