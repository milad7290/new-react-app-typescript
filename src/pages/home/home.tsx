import Button from "@material-ui/core/Button";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ErrorBoundary } from "../../helper/error-boundary/error-boundary";
import TestComponent from "./components/test-component/test-component";
import "./home.scss";
import { Post } from "../../models/post.model";
import {
  getPosts,
  getPostsLoading,
} from "../../store/selectors/post.selectors";
import { fetchPosts } from "../../services/post.service";
import { AppState } from "../../store";

interface HomeProps {
  postList: Post[];
  postListLoading: boolean;
  fetchPosts: any;
}

interface HomeStates {
  activeStep: number;
}

const Home = (props: HomeProps) => {
  const [activeStep, setActiveStep] = useState(0);

  const postList = useSelector<AppState>((state) => getPosts(state));
  const postListLoading = useSelector<AppState>((state) =>
    getPostsLoading(state)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary>
          <TestComponent
            isLoading={postListLoading}
            postList={postList}
          ></TestComponent>
        </ErrorBoundary>
        <button onClick={() => setActiveStep(1)}></button>
        <Button variant="contained" color="primary" disableElevation>
          تست تم متریال
        </Button>
        <Link to="/aboutUs">درباره ما</Link>
      </header>
    </div>
  );
};

export default Home;
