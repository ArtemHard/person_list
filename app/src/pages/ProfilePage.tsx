import { useState } from "react";
import styled from "styled-components";
import { Header } from "../components/Header";

const FormWrapper = styled.div`
  /* margin-top: 2%; */
  /* margin-bottom: 2%; */
  margin: 2% 0;
  padding: 0 4%;
  width: 100%;
`;

const Form = styled.form.attrs({
  autocomplete: "off",
})`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  /* visual */
  background: var(--colors-bg-s);
  border: 1px solid #c5c5c5;
  border-radius: var(--rad-b);
  padding-top: 4%;
  padding-bottom: 2%;
  padding: 1% 2%;
`;

const disabledInput = (props: InputType): boolean => {
  const { isLoading, disabled } = props;
  if (isLoading) {
    return isLoading;
  } else if (disabled) {
    return disabled;
  } else return false;
};

type ColorInputIsDisabledType = "#d8d8d8" | null;
const ColorInputIsDisabled = (data: boolean): ColorInputIsDisabledType => {
  if (data) {
    return "#d8d8d8";
  } else return null;
};

type InputType = {
  disabled?: boolean;
  value?: string;
  isLoading?: boolean;
};
const Input = styled.input.attrs<InputType>((props) => ({
  disabled: disabledInput(props),
  className: 'form-control'
}))<InputType>`
  width: 211px;
  height: 30px;
  
  
  color: ${(props) => {
    if (!!ColorInputIsDisabled(disabledInput(props))) {
      return ColorInputIsDisabled(disabledInput(props));
    } else return "inherit";
  }};
  // TEST NEDD
  //  ColorInputIsDisabled(disabledInput(props))
  background: #ffffff;
  border: 1px solid #d8d8d8;
  border-radius: 5px;
  display: block;

:focus {
  border-color: black;
}
:invalid {
  border-color: red;
}
`
const Label = styled.label.attrs({
  className: "form-label",
})`
  display: block;

`;

const InputWrapper= styled.div.attrs({
  className: "form-group"
})`
margin: 1%;
position: relative;


`


export const ProfilePage = () => {
  return (
    <>
      <Header textBtn='Редактировать' titleText='Профиль пользователя' />
      <FormWrapper>
        <Form name='profile' id='profile'>
          
          <InputWrapper>
            <Label>Username</Label>
              <Input
                form='profile'
                id='test'
                name='text'
                // value='asdf'
                placeholder=' '
                type='text'
              />
          </InputWrapper>
          <InputWrapper>
            <Label>Username</Label>
              <Input
                form='profile'
                id='test'
                name='text'
                // value='asdf'
                placeholder=' '
                type='text'
              />
          </InputWrapper>
          <InputWrapper>
            <Label>Username</Label>
              <Input
                form='profile'
                id='test'
                name='text'
                // value='asdf'
                placeholder=' '
                type='text'
              />
          </InputWrapper>
          
          
        
        </Form>
      </FormWrapper>
    </>
  );
};
