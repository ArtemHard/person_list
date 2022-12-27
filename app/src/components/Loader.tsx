import styled, { keyframes } from "styled-components";

const loadSpineer = keyframes`
    0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

type SizeTypeAfter = "64px" | "20px";
const transformSize = (isBtn?: boolean): SizeTypeAfter => {
  if (isBtn) {
    return "20px";
  } else return "64px";
};

type BorderSizeTypeAfter = "6px" | "4px";
const transformBorder = (isBtn?: boolean): BorderSizeTypeAfter => {
  if (isBtn) {
    return "4px";
  } else return "6px";
};

type LoaderType = {
  isLoading: boolean;
  isBtn?: boolean;
};

const Loader = styled.div<LoaderType>`
  display: inline-block;
  display: ${(props) => {
    if (props.isLoading) {
      return "inline-block";
    } else return "none";
  }};
  max-width: 80px;
  max-height: 80px;
  align-items: baseline;

  :after {
    content: " ";

    align-items: baseline;
    display: block;

    width: ${(props) => transformSize(!!props.isBtn)};
    height: ${(props) => transformSize(!!props.isBtn)};
    margin: 8px;
    border-radius: 50%;
    border: ${(props) => transformBorder(!!props.isBtn)} solid #d80707;
    border-color: #d80707 transparent #d80707 transparent;
    animation: ${loadSpineer} 1.2s linear infinite;
  }
`;

export default Loader;
