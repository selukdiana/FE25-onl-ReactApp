import React, { FC } from 'react';

interface IShareListProps {
  listName: string;
  children: React.ReactNode;
}
const ShareList: FC<IShareListProps> = ({ listName, children }) => {
  return (
    <>
      <p>{listName}</p>
      <ul>{children}</ul>
    </>
  );
};

export default ShareList;
