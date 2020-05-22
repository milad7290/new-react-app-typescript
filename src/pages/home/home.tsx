import Button from "@material-ui/core/Button";
// import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { ErrorBoundary } from "../../helper/error-boundary/error-boundary";
import { AppState } from "../../store";
import { AppActions } from "../../types/app-action-type/app-action-type";
import { Post } from "../../types/post-type/post-type";
import TestComponent from "./components/test-component/test-component";
import "./home.scss";
import { fetchPosts } from "./redux/home-actions";
import { getPosts, getPostsLoading } from "./redux/home-selector";

interface HomeProps {
  postList: Post[];
  postListLoading: boolean;
  fetchPosts: any;
}

interface HomeStates {
  activeStep: number;
}

type Props = HomeProps & LinkDispatchToProps & LinkStateToProps;

class Home extends Component<Props, HomeStates> {
  state = {
    activeStep: 0,
  };

  componentDidMount = () => {
    this.props.fetchPosts();
  };

  /**
   * start render dom
   * * test method for update state
   * ! its a test method must be deleted
   * ? test in
   * TODO test todo
   * @param myParam
   */
  test = () => {
    this.setState({
      activeStep: 1,
    });
  };

  render() {
    const { postList, postListLoading } = this.props;
    // const { activeStep } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <ErrorBoundary>
            <TestComponent
              isLoading={postListLoading}
              postList={postList}
            ></TestComponent>
          </ErrorBoundary>
          <button onClick={this.test}></button>
          <Button variant="contained" color="primary" disableElevation>
            تست تم متریال
          </Button>
          <Link to="/aboutUs">درباره ما</Link>
        </header>
      </div>
    );
  }
}

interface LinkStateToProps {
  postList: Post[];
  postListLoading: boolean;
}

interface LinkDispatchToProps {
  fetchPosts: () => void;
}

const mapStateToProps = (
  state: AppState,
  ownProp: HomeProps
): LinkStateToProps => {
  const postList = getPosts(state);
  const postListLoading = getPostsLoading(state);

  return {
    postList,
    postListLoading,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProp: HomeProps
): LinkDispatchToProps => ({
  fetchPosts: bindActionCreators(fetchPosts, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
