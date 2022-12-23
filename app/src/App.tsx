import { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { useGetUsersQuery } from "./redux/api/usersApi";
import { addUsers } from "./redux/reducers/personsSlice";

function App() {
  const { data, error, isLoading } = useGetUsersQuery();
  const persons = useAppSelector((state) => state.persons);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data) dispatch(addUsers(data));
  }, [data]);
  return <main className='main'></main>;
}

export default App;
