import React, { FC } from 'react';
import Footer from '../../components/Footer/Footer';
import Article from '../../components/Article/Article';
import RelatedPostsList from '../../components/RelatedPostsList/RelatedPostsList';
import AlertBar from '../../components/AlertBar/AlertBar';

const Post: FC = () => {
  return (
    <>
      <Article />

      <div className="hideshare"></div>

      <RelatedPostsList />

      <AlertBar />
      
      <Footer />
    </>
  );
};

export default Post;
