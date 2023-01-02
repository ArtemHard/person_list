import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { User } from "../redux/reducers/types/personsTypes";

const CardWrapper = styled.div`
  background-color: var(--colors-bg-m);
  width: 100%;
  margin-bottom: 1rem;
  padding: 1% 0;
  max-width: 560px; // FIT CONTENT */
  height: 100px;
  display: flex;
  justify-content: space-between;
  border-radius: var(--rad-b);
`;

const InfoLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5%;
`;

const InfoRightContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 1.5%;
`;

const InfoWrapper = styled.div``;

const InfoArticle = styled.span`
  font-family: var(--family);
  font-style: normal;
  font-weight: var(--fw-normal);
  font-size: var(--fs-h);
  line-height: 13px;

  color: #a3a3a3;
`;

const InfoData = styled.span`
  font-family: var(--family);
  font-style: normal;
  font-weight: var(--fw-normal);
  font-size: var(--fs-h);
  line-height: 13px;

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
          <Link to={`/user/${id}`}>Подробнее</Link>
        </Details>
      </InfoRightContainer>
    </CardWrapper>
  );
};
