import { log } from "console";
import { useState } from "react";
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
  edit?: boolean
  setEdit?: React.Dispatch<React.SetStateAction<boolean>>
};

type HeaderWrapperProps = {
  isBtn?: boolean;
};

export const Header = (props: HeaderPropsType) => {
  const { isLoading } = useGetUsersQuery();
  // console.log(props.setEdit);
  const changeDisabled = props.setEdit ? props.setEdit : null
  const editClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (changeDisabled !== null)
    changeDisabled(!props.edit)
  }

  return (
    <HeaderWrapper isBtn={!!props.textBtn}>
      <RightTitle>{props.titleText || "Список пользователей"}</RightTitle>
      {!!props.textBtn && (
        <Button color="white" isLoading={isLoading} onClick={editClickHandler}>
          {isLoading ? "" : props.textBtn}
        </Button>
      )}
    </HeaderWrapper>
  );
};
