import React, { useEffect } from "react";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useGetUsersQuery } from "../redux/api/usersApi";
import { addUsers } from "../redux/reducers/personsSlice";

export const UsersPage = () => {
  const { data, error, isLoading } = useGetUsersQuery();
  const persons = useAppSelector((state) => state.persons);
  console.log(persons);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data) dispatch(addUsers(data));
  }, [data]);

  return (
    <>
      <Header />
      {persons.map((person) => (
        <Card key={person.id} {...person} />
      ))}
    </>
  );
};
