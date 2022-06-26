import React, { FC } from 'react';
import AuthorPost from '../AuthorPost/AuthorPost';

const AuthorPostsList: FC = () => {
  return (
    <div className="graybg authorpage">
      <div className="container">
        <div className="listrecent listrelated">
          <AuthorPost
            img="assets/img/demopic/8.jpg"
            title="Life is worth living forever and ever"
          />

          <AuthorPost
            img="assets/img/demopic/10.jpg"
            title="Best European capitals to visit and the costs implied"
          />

          <AuthorPost
            img="assets/img/demopic/9.jpg"
            title="10 Things you should learn before visiting"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthorPostsList;
