import styled from "styled-components";
/*
type Props = {
  children?: JSX.Element;
};


export const LeftBlock = ({ children }: Props) => {
  return <div className='LeftBlock'>{children}</div>;
};
*/
export const LeftBlock = styled.div`
  background: var(--colors-bg-h);
  display: flex;
  flex-direction: column;
  /* padding: 1.2rem; */
  justify-content: flex-start;
  width: 35%;
  min-width: 150px;
  padding: 2%;
`;
