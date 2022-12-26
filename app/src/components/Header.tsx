import styled from "styled-components";
import { Button } from "./Button";

const HeaderWrapper = styled.div<HeaderPropsType>`
  /* margin: 2%; */
  display: flex;
  justify-content: ${(props) => {
    if (!!props.textBtn) {
      return "space-between";
    } else return "space-between";
    //
  }};
  align-items: center;
`;

const RightTitle = styled.h1`
  font-family: var(--family);
  font-weight: var(--fw-bold);
  font-size: 28px;
  line-height: 30px;
`;

type HeaderPropsType = {
  textBtn?: string;
};

export const Header = ({ textBtn }: HeaderPropsType) => {
  //   console.log(!!textBtn);

  return (
    // textBtn={textBtn}
    <HeaderWrapper>
      <RightTitle>Список пользователей</RightTitle>
      {!!textBtn && <Button>{textBtn}</Button>}
    </HeaderWrapper>
  );
};
