import React, { FC } from 'react';
import AuthorMeta from '../../components/AuthorMeta/AuthorMeta';
import AuthorPostsList from '../../components/AuthorPostsList/AuthorPostsList';
import Footer from '../../components/Footer/Footer';

const Author: FC = () => {
  return (
    <>
      <AuthorMeta />
      <AuthorPostsList />
      <Footer />
    </>
  );
};

export default Author
