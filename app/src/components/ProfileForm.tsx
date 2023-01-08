import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useGetPersonQuery } from "../redux/api/usersApi";
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
    edit: boolean
}

const ProfileForm:FC<ProfileFormTypeProps> = (props) => {
// console.log(userData);
const { id } = useParams(); 
const {data, isLoading} = useGetPersonQuery(id)

const [name, setName] = useState<string>('')
const [userName, setUserName] = useState<string>('')
const [email, setEmail] = useState<string>('')
const [street, setStreet] = useState<string>('')
const [city, setCity] = useState<string>('')
const [zipCode, setZipCode] = useState<string>('')
const [phone, setPhone] = useState<string>('')
const [website, setWebsite] = useState<string>('')
// const [ comment, setComment] = useState<string>()

useEffect(() => {
  if (typeof data !== 'undefined') {
    setName(data.name)
    setUserName(data.username)
    setEmail(data.email)
    setStreet(data.address.street)
    setCity(data.address.city)
    setPhone(data.phone)
    setWebsite(data.website)
    setZipCode(data.address.zipcode)
    // setComment()
  }
}, [data] )

const changeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  setName(e.target.value)
}
const changeUserNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  setUserName(e.target.value)
}
const changeEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  setEmail(e.target.value)
}
const changeStreetHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  setStreet(e.target.value)
}
const changeCityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  setCity(e.target.value)
}
const changePhoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  setPhone(e.target.value)
}
const changeWebsiteHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  setWebsite(e.target.value)
}
const changeZipCodeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  setZipCode(e.target.value)
}

    return (
<>
    <FormWrapper>
      <Form name="profile" id="profile" >
        <InputWrapper>
          <Label>Name</Label>
          <Input
            disabled={props.edit}
            form="profile"
            id="test"
            name="text"
            value={name}
            placeholder=" "
            type="text"
            onChange={changeNameHandler}
            key="name"
          />
        </InputWrapper>

        <InputWrapper>
          <Label>User name</Label>
          <Input
          disabled={props.edit}
            form="profile"
            id="test"
            name="text"
            value={userName}
            onChange={changeUserNameHandler}
            placeholder=" "
            type="text"
          />
        </InputWrapper>

        <InputWrapper>
          <Label>E-mail</Label>
          <Input
          disabled={props.edit}
            form="profile"
            id="test"
            name="text"
            value={email}
            onChange={changeEmailHandler}
            placeholder=" "
            type="text"
          />
        </InputWrapper>

        <InputWrapper>
          <Label>Street</Label>
          <Input
          disabled={props.edit}
            form="profile"
            id="test"
            name="text"
            value={street}
            onChange={changeStreetHandler}
            placeholder=" "
            type="text"
          />
        </InputWrapper>

        <InputWrapper>
          <Label>City</Label>
          <Input
          disabled={props.edit}
            form="profile"
            id="test"
            name="text"
            value={city}
            onChange={changeCityHandler}
            placeholder=" "
            type="text"
          />
        </InputWrapper>

        <InputWrapper>
          <Label>Zip code</Label>
          <Input
          disabled={props.edit}
            form="profile"
            id="test"
            name="text"
            value={zipCode}
            onChange={changeZipCodeHandler}
            placeholder=" "
            type="text"
          />
        </InputWrapper>

        <InputWrapper>
          <Label>Phone</Label>
          <Input
          disabled={props.edit}
            form="profile"
            id="test"
            name="text"
            value={phone}
            onChange={changePhoneHandler}
            placeholder=" "
            type="text"
          />
        </InputWrapper>

        <InputWrapper>
          <Label>Website</Label>
          <Input
          disabled={props.edit}
            form="profile"
            id="test"
            name="text"
            value={website}
            onChange={changeWebsiteHandler}
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