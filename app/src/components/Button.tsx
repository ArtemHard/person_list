import styled from "styled-components";

type InputColorType = {
  background?: string;
  color?: string;
  isLoading?: boolean;
  height?: string;
};

export const Button = styled.button.attrs<InputColorType>((props) => ({
  disabled: props.isLoading ? props.isLoading : false,
}))<InputColorType>`
  height: ${(props) => props.height || "24.12px"};

  background: ${(props) => {
    if (!!props.isLoading) {
      return "hsla(0, 0%, 74%, 1)";
    } else return props.background || "#4B51EF";
  }};

  color: ${(props) => props.color || "hsla(0, 0%, 0%, 1)"};
  border-radius: 5px;
  border: none;
  margin: 5px;
  width: fit-content;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fs-h);
  letter-spacing: 1px;
  cursor: pointer;

  :hover {
    background: #6467ce;
  }
  :disabled {
    background: #a09f9f;
    cursor: auto;
  }
`;
