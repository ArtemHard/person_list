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
  name: "profile",
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

const Input = styled.input.attrs<InputType>((props) => ({
  disabled: disabledInput(props),
}))<InputType>`
  width: 211px;
  height: 22px;
  margin: 2%;
  background: #ffffff;
  border: 1px solid #d8d8d8;
  border-radius: 5px;
`;

type InputType = {
  disabled?: boolean;
  value?: string;
  isLoading?: boolean;
};

export const ProfilePage = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  return (
    <>
      <Header textBtn='Редактировать' titleText='Профиль пользователя' />
      <FormWrapper>
        <Form>
          <Input disabled={isDisabled} />
          <Input />
          <Input disabled={isDisabled} />
        </Form>
      </FormWrapper>
    </>
  );
};
