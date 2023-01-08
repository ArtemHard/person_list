import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../hooks/hooks";
import { filtredByCity, filtredByCompany } from "../redux/reducers/personsSlice";
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
  justify-content: flex-start;
  width: 35%;
  min-width: 150px;
  padding: 2%;
  min-height: 100vh;
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
  const dispatch = useAppDispatch();

const [currBtn, setCurrBtn] = useState('')
// #52CF4F
const [cityBtnColor, setCityBtnColor] = useState('')
const [companyBtnColor, setCompanyBtnColor] = useState('')

const cityClickHandler = () => {
  dispatch(filtredByCity())
  setCurrBtn('city')
  console.log(currBtn);
  
}
const companyClickHandler = () => {
  dispatch(filtredByCompany())
  setCurrBtn('company')
}
  
useEffect(() => {
 if(currBtn === 'city') {
  setCityBtnColor('#52CF4F')
  setCompanyBtnColor('')
 } 
 if(currBtn === 'company') {
   setCompanyBtnColor('#52CF4F')
    setCityBtnColor('')
 } 
}, [currBtn])

  return (
    <Wrapper>
      <FixedWrapper>
        <LeftTitle>Сортировка</LeftTitle>
        <Button color='white' background={cityBtnColor} onClick={cityClickHandler}>По городу</Button>
        <Button color='white' background={companyBtnColor} onClick={companyClickHandler}>По компаниям</Button>
      </FixedWrapper>
    </Wrapper>
  );
};
