// import PropTypes from "prop-types";
import React from 'react';
import { Post } from '../../../../../types/post-type/post-type';
import './subtest-component.scss';

interface SubTestComponentProps {
   postList: Post[];
}

interface SubTestComponentStates {}

const SubTestComponent = (props:SubTestComponentProps) => {
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


export default SubTestComponent;
