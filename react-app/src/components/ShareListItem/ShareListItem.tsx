import React, { FC } from 'react';

interface IShareListItemProps {
  count?: number;
  href?: string;
  path: string;
}

const ShareListItem: FC<IShareListItemProps> = ({ count, href, path }) => {
  return (
    <li>
      <a target="_blank" href={href}>
        {count}
        <br/>
        <svg className="svgIcon-use" width="29" height="29" viewBox="0 0 29 29">
          <path d={path}></path>
        </svg>
      </a>
    </li>
  );
};

export default ShareListItem;
