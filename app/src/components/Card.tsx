import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background-color: var(--colors-bg-m);
  width: 100%;
  width: 560px; // FIT CONTENT
  height: 100px;
  display: flex;
  flex-direction: column;
  border-radius: var(--rad-b);
`;

const InfoWrapper = styled.div`
  display: flex;
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

export const Card = () => {
  return (
    <CardWrapper>
      <InfoWrapper>
        <InfoArticle>ФИО: </InfoArticle>
        <InfoData> ВАСЯ ИВАНОВ</InfoData>
      </InfoWrapper>
    </CardWrapper>
  );
};
