import styled from "styled-components";
import { User } from "../redux/reducers/types/personsTypes";
import { Button } from "./Button";

const FormWrapper = styled.div`
  margin-bottom: 2%;
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
  className: "form-control",
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
`;
const Label = styled.label.attrs({
  className: "form-label",
})`
  display: block;
`;

const InputWrapper = styled.div.attrs({
  className: "form-group",
})`
  margin: 1%;
  position: relative;
`;

const InputComment = styled.textarea.attrs<InputType>((props) => ({
  disabled: disabledInput(props),
  className: "form-control",
}))<InputType>`
  width: 100%;
  height: 70px;
  resize: none;

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
  margin-right: 150px;

  :focus {
    border-color: black;
  }
  :invalid {
    border-color: red;
  }
`;

type UserDataType = User | undefined
type ProfileFormTypeProps = {
    isLoading: boolean
}

const ProfileForm = ({isLoading, userData} : any) => {

    return (
<>
    <FormWrapper>
      <Form name="profile" id="profile">
        <InputWrapper>
          <Label>Name</Label>
          <Input
            form="profile"
            id="test"
            name="text"
            // value={name}
            placeholder=" "
            type="text"
            // onChange={changeName}
            key="name"
          />
        </InputWrapper>

        <InputWrapper>
          <Label>User name</Label>
          <Input
            form="profile"
            id="test"
            name="text"
            // value='asdf'
            placeholder=" "
            type="text"
          />
        </InputWrapper>

        <InputWrapper>
          <Label>E-mail</Label>
          <Input
            form="profile"
            id="test"
            name="text"
            // value='asdf'
            placeholder=" "
            type="text"
          />
        </InputWrapper>

        <InputWrapper>
          <Label>Street</Label>
          <Input
            form="profile"
            id="test"
            name="text"
            // value='asdf'
            placeholder=" "
            type="text"
          />
        </InputWrapper>

        <InputWrapper>
          <Label>City</Label>
          <Input
            form="profile"
            id="test"
            name="text"
            // value='asdf'
            placeholder=" "
            type="text"
          />
        </InputWrapper>

        <InputWrapper>
          <Label>Zip code</Label>
          <Input
            form="profile"
            id="test"
            name="text"
            // value='asdf'
            placeholder=" "
            type="text"
          />
        </InputWrapper>

        <InputWrapper>
          <Label>Phone</Label>
          <Input
            form="profile"
            id="test"
            name="text"
            // value='asdf'
            placeholder=" "
            type="text"
          />
        </InputWrapper>

        <InputWrapper>
          <Label>Website</Label>
          <Input
            form="profile"
            id="test"
            name="text"
            // value='asdf'
            placeholder=" "
            type="text"
          />
        </InputWrapper>

        <InputWrapper>
          <Label>Comment</Label>
          <InputComment
            form="profile"
            id="test"
            name="text"
            // value='asdf'
            // placeholder=' '
          />
        </InputWrapper>
      </Form>
    </FormWrapper>
    <div
      style={{
        padding: "0 4%",
        display: "flex",
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Button color="white" background="#52CF4F" isLoading={false}>
        Отправить
      </Button>
    </div>
  </>
    )
};

export default ProfileForm