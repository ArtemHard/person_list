import { log } from "console";
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import ProfileForm from "../components/ProfileForm";
import { useAppDispatch, useAppSelector  } from "../hooks/hooks";
import { useGetPersonQuery } from "../redux/api/usersApi";




export const ProfilePage = () => {

  // const { id } = useParams(); 
  // const dispatch = useAppDispatch()

  // const {data, isLoading} = useGetPersonQuery(id)
  
  /*
  useEffect(() => {
    if (data) dispatch(addUsers([data]));
  }, [data]);
 
  const person = useAppSelector(store => store.persons[0])
  console.log(person);
  
  
  const [name, setName] = useState(person.name)
  // const [userName, setUserName] = useState(data?.username)
  // const [email, setEmail] = useState(data?.email)
  // const [street, setStreet] = useState(data?.address.street)
  // const [city, setCity] = useState(data?.address.city)
 
 
  
 const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
  setName(e.target.value)
  console.log(e.target.value);
  
 }

  */


  return (
    <>
      <Header textBtn='Редактировать' titleText='Профиль пользователя' />
      <ProfileForm />
    </>
  );
};
