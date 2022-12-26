import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { User } from "../redux/reducers/types/personsTypes";

const CardWrapper = styled.div`
  background-color: var(--colors-bg-m);
  width: 100%;
  width: 560px; // FIT CONTENT
  height: 100px;
  display: flex;
  /* flex-wrap: nowrap; */
  /* align-items: center; */
  justify-content: space-between;
  border-radius: var(--rad-b);
`;

const InfoLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5%;
  /* align-items: flex-end; */
`;

const InfoRightContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 1.5%;
  /* justify-content: flex-end; */
`;

const InfoWrapper = styled.div`
  /* padding-bottom: 5%; */
`;

const InfoArticle = styled.span`
  font-family: var(--family);
  font-style: normal;
  font-weight: var(--fw-normal);
  font-size: var(--fs-h);
  line-height: 13px;
  /* identical to box height */

  color: #a3a3a3;
`;

const InfoData = styled.span`
  font-family: var(--family);
  font-style: normal;
  font-weight: var(--fw-normal);
  font-size: var(--fs-h);
  line-height: 13px;
  /* identical to box height */

  color: var(--color-text);
`;

const Details = styled.span`
  font-family: var(--family);
  font-style: normal;
  font-weight: var(--fw-normal);
  font-size: var(--fs-m);
  line-height: 14px;
  color: #4b51ef;
`;

export const Card = ({ ...props }: User) => {
  const { id, name, username, company, address } = props;
  return (
    <CardWrapper>
      <InfoLeftContainer>
        <InfoWrapper>
          <InfoArticle>Имя: </InfoArticle>
          <InfoData>
            {" "}
            {name} {username}
          </InfoData>
        </InfoWrapper>
        <InfoWrapper>
          <InfoArticle>город: </InfoArticle>
          <InfoData> {address.city}</InfoData>
        </InfoWrapper>
        <InfoWrapper>
          <InfoArticle>компания: </InfoArticle>
          <InfoData> {company.name}</InfoData>
        </InfoWrapper>
      </InfoLeftContainer>
      <InfoRightContainer>
        <Details>
          <a href='/'>Подробнее</a>
        </Details>
      </InfoRightContainer>
    </CardWrapper>
  );
};
