import React, { FC } from 'react';

const Footer: FC = () => {
  return (
    <div className="footer">
      <p className="pull-left">Copyright &copy; 2017 Your Website Name</p>
      <p className="pull-right">
        Mediumish Theme by{' '}
        <a target="_blank" href="https://www.wowthemes.net">
          WowThemes.net
        </a>
      </p>
      <div className="clearfix"></div>
    </div>
  );
};

export default Footer;
