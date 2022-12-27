import styled from "styled-components";
import { Button } from "./Button";
/*
type Props = {
  children?: JSX.Element;
};


export const LeftBlock = ({ children }: Props) => {
  return <div className='LeftBlock'>{children}</div>;
};
*/
export const Wrapper = styled.div`
  background: var(--colors-bg-h);
  display: flex;
  flex-direction: column;
  /* padding: 1.2rem; */
  justify-content: flex-start;
  width: 35%;
  min-width: 150px;
  padding: 2%;
  height: auto;
`;

const LeftTitle = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: var(--fw-bold);
  font-size: 24px;
  line-height: 28px;
`;

const FixedWrapper = styled.div`
  position: sticky;
  top: 4%;
  display: flex;
  flex-direction: column;
`;

export const LeftBlock = () => {
  return (
    <Wrapper>
      <FixedWrapper>
        <LeftTitle>Сортировка</LeftTitle>
        <Button color='white'>По городу</Button>
        <Button color='white'>По компаниям</Button>
      </FixedWrapper>
    </Wrapper>
  );
};
