import React, { FC } from 'react';
import VerticalPost from '../VerticalPost/VerticalPost';

const ListPosts: FC = () => {
  return (
    <section className="recent-posts">
      <div className="section-title">
        <h2>
          <span>All Stories</span>
        </h2>
      </div>
      <div className="card-columns listrecent">
        <VerticalPost
          image="assets/img/demopic/5.jpg"
          title="Autumn doesn't have to be nostalgic, you know?"
        />

        <VerticalPost
          image="assets/img/demopic/6.jpg"
          title="Best galleries in the world with photos"
        />

        <VerticalPost
          image="assets/img/demopic/7.jpg"
          title="Little red dress and a perfect summe"
        />
        <VerticalPost
          image="assets/img/demopic/8.jpg"
          title="Thinking outside the box can help you prosper"
        />
        <VerticalPost
          image="assets/img/demopic/9.jpg"
          title="10 Things you should know about choosing your hous"
        />
        <VerticalPost
          image="assets/img/demopic/10.jpg"
          title="Visiting the world means learning cultures"
        />
      </div>
    </section>
  );
};


export default ListPosts