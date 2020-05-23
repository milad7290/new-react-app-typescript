import Button from "@material-ui/core/Button";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Test from "../../components/Test/Test";
import { ErrorBoundary } from "../../helper/ErrorBoundary/ErrorBoundary";
import { Post } from "../../models/post.model";
import { fetchPosts } from "../../services/post.service";
import { AppState } from "../../store";
import {
  getPosts,
  getPostsLoading,
} from "../../store/selectors/post.selectors";
import "./Home.scss";

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
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary>
          <Test isLoading={postListLoading} postList={postList}></Test>
        </ErrorBoundary>
        <button onClick={() => setActiveStep(1)}></button>
        <Button variant="contained" color="primary" disableElevation>
          تست تم متریال
        </Button>
        <Link to="/aboutUs">درباره ما</Link>
        <small>
          You are running this application in <b>{process.env.NODE_ENV}</b>{" "}
          mode.
        </small>
        <strong>{process.env.REACT_APP_NOT_SECRET_CODE}</strong>
      </header>
    </div>
  );
};

export default Home;
