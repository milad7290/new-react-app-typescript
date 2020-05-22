// import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import { Post } from "../../../../../types/post-type/post-type";
import "./subtest-component.scss";

interface SubTestComponentProps {
  postList: Post[];
}

interface SubTestComponentStates {}

class SubTestComponent extends PureComponent<
  SubTestComponentProps,
  SubTestComponentStates
> {
  render() {
    const { postList } = this.props;
    // const { activeStep } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          {postList.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
          {/* <p>{postList}</p> */}
        </header>
      </div>
    );
  }
}

// SubTestComponent.propTypes = {
//   postList: PropTypes.array,
// };

export default SubTestComponent;
