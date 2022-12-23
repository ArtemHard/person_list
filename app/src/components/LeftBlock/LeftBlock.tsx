import React from "react";

type Props = {
  children?: JSX.Element;
};

export const LeftBlock = ({ children }: Props) => {
  return <div className='LeftBlock'>{children}</div>;
};
