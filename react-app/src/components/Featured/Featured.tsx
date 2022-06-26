import React, { FC } from 'react';
import HorizontalPost from '../HorizontalPost/HorizontalPost';

const Featured: FC = () => {
  return (
    <>
      <section className="featured-posts">
        <div className="section-title">
          <h2>
            <span>Featured</span>
          </h2>
        </div>
        <div className="card-columns listfeaturedtag">
          <HorizontalPost
            backgroundImg={'assets/img/demopic/1.jpg'}
            title="We're living some strange times"
            description={
              'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
            }
            author={'Stev'}
          />

          <HorizontalPost
            backgroundImg={'assets/img/demopic/2.jpg'}
            title="The beauty of this world is in your heart"
            description={
              'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
            }
            author={'Jane'}
          />

          <HorizontalPost
            backgroundImg={'../../assets/img/demopic/3.jpg'}
            title="Dreaming of Las Vegas Crazyness"
            description={
              'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
            }
            author={'Mary'}
          />

          <HorizontalPost
            backgroundImg={'assets/img/demopic/4.jpg'}
            title="San Francisco at its best view in all seasons"
            description={
              'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
            }
            author={'Sal'}
          />
        </div>
      </section>
    </>
  );
};

export default Featured