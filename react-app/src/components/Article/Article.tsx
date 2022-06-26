import React, { FC } from 'react';
import LeftShare from '../LeftShare/LeftShare';
import Post from '../Post/Post';

const Article: FC = () => {
  return (
    <div className="container">
      <div className="row">
        <LeftShare />
        <Post />
      </div>
    </div>
  );
};

export default Article;
