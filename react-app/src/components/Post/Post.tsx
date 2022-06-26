import React, { FC } from 'react';
import PostMeta from '../PostMeta/PostMeta';
import PostContent from '../PostContent/PostContent';
import PostTags from '../PostTags/PostTags';

const Post: FC = () => {
  return (
    <div className="col-md-8 col-md-offset-2 col-xs-12">
      <div className="mainheading">
        <PostMeta />

        <h1 className="posttitle">
          18 Things You Should Learn Before Moving Into a New Home
        </h1>
      </div>

      {/* <!-- Begin Featured Image --> */}
      <img
        className="featured-image img-fluid"
        src="assets/img/demopic/10.jpg"
        alt=""
      />
      {/* <!-- End Featured Image --> */}

      <PostContent />

      <PostTags />
    </div>
  );
};

export default Post;
