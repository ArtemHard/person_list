import styled from "styled-components";
import { useGetUsersQuery } from "../redux/api/usersApi";
import { Button } from "./Button";
import Loader from "./Loader";

const HeaderWrapper = styled.div<HeaderWrapperProps>`
  padding: 2% 4%;
  display: flex;
  width: 100%;
  justify-content: ${(props) => {
    if (!!props.isBtn) {
      return "space-between";
    } else return "space-around";
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
  titleText?: string;
};

type HeaderWrapperProps = {
  isBtn?: boolean;
};

export const Header = ({ textBtn, titleText }: HeaderPropsType) => {
  const { isLoading } = useGetUsersQuery();

  return (
    <HeaderWrapper isBtn={!!textBtn}>
      <RightTitle>{titleText || "Список пользователей"}</RightTitle>
      {!!textBtn && (
        <Button color='white' isLoading={isLoading}>
          {isLoading ? "" : textBtn}
        </Button>
      )}
    </HeaderWrapper>
  );
};
