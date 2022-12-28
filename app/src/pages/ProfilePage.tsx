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

const Input = styled.input.attrs<InputType>((props) => ({
  disabled: disabledInput(props),
}))<InputType>`
  width: 211px;
  height: 30px;
  padding: 1%;
  margin: 2%;
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

  :focus ~ .label,  /* фокус на input */
:not(:placeholder-shown) ~ .label  /* в input есть значение */ {
    transform: translateY(-30px) translateX(10px) scale(0.75);
  }

  :not(:placeholder-shown) ~ .label {
    color: #808097; /* сероватый */
  }
  :focus ~ .label {
    color: #dc2f55; /* красный, фокус в поле */
  }
`;
// https://xhtml.ru/2021/html/how-to-create-fancy-jumping-text-input-labels/
const Label = styled.label.attrs({
  className: "label",
})`
  transition: transform 200ms, color 200ms;
`;

type InputType = {
  disabled?: boolean;
  value?: string;
  isLoading?: boolean;
};

export const ProfilePage = () => {
  return (
    <>
      <Header textBtn='Редактировать' titleText='Профиль пользователя' />
      <FormWrapper>
        <Form name='profile' id='profile'>
          <Input
            form='profile'
            id='test'
            name='text'
            // value='asdf'
            placeholder=' '
            type='text'
          />
          <Label>Введите тестовый текст</Label>

          <Input />
          <Input disabled={true} />
        </Form>
      </FormWrapper>
    </>
  );
};
