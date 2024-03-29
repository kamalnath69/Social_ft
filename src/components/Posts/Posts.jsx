import React from 'react';
import './Posts.css';
import { PostsData } from '../../Data/PostsData';
import Post from '../Post/Post';

const Posts = () => {
  return (
    <div className="Posts">
      {PostsData.map((post, index) => {
        return <Post key={index} data={post} />;
      })}
    </div>
  );
};

export default Posts;

