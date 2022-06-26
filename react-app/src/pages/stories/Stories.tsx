import React, { FC } from 'react';
import Title from '../../components/Title/Title';
import Featured from '../../components/Featured/Featured';
import ListPosts from '../../components/ListPosts/ListPosts';
import Footer from '../../components/Footer/Footer';

const Stories: FC = () => {
  return (
    <>
      <div className="container">
        <Title />

        <Featured />

        <ListPosts />

        <Footer />
      </div>
    </>
  );
};

export default Stories
