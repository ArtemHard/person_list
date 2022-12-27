import React, { useEffect } from "react";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import Loader from "../components/Loader";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useGetUsersQuery } from "../redux/api/usersApi";
import { addUsers } from "../redux/reducers/personsSlice";

export const UsersPage = () => {
  const { data, error } = useGetUsersQuery();
  const persons = useAppSelector((state) => state.persons);
  console.log(persons);

  const isLoading = true;

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data) dispatch(addUsers(data));
  }, [data]);

  return (
    <>
      <Header textBtn='кнопка' />
      <Loader isLoading={isLoading} />
      {persons.map((person) => (
        <Card key={person.id} {...person} />
      ))}
    </>
  );
};
