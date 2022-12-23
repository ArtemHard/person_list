import React from "react";

type Props = {
  children?: JSX.Element;
};

export const RightBlock = ({ children }: Props) => {
  return <div className='RightBlock'>{children}</div>;
};
