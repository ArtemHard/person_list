import { useState } from "react";
import { Header } from "../components/Header";
import ProfileForm from "../components/ProfileForm";




export const ProfilePage = () => {

  const [edit, setEdit] = useState<boolean>(true);

  return (
    <>
      <Header textBtn='Редактировать' titleText='Профиль пользователя' setEdit={setEdit} edit={edit}/>
      <ProfileForm edit={edit} />
    </>
  );
};
