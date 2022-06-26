import React, { FC } from 'react';
import RelatedPost from '../RelatedPost/RelatedPost';

const RelatedPostsList: FC = () => {
  return (
    <div className="graybg">
      <div className="container">
        <div className="row listrecent listrelated">
          <RelatedPost
            image="assets/img/demopic/9.jpg"
            title="Best recreational places to visit on a holiday"
          />

          <RelatedPost
            image="assets/img/demopic/8.jpg"
            title="How travelling can change your life"
          />

          <RelatedPost
            image="assets/img/demopic/7.jpg"
            title="Little red dress and a perfect summer"
          />
        </div>
      </div>
    </div>
  );
};

export default RelatedPostsList;
