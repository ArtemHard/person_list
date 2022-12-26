import { useEffect } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { LeftBlock } from "./components/LeftBlock";
import { RightBlock } from "./components/RightBlock";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { useGetUsersQuery } from "./redux/api/usersApi";
import { addUsers } from "./redux/reducers/personsSlice";

function App() {
  const { data, error, isLoading } = useGetUsersQuery();
  const persons = useAppSelector((state) => state.persons);
  console.log(persons);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data) dispatch(addUsers(data));
  }, [data]);
  return (
    <>
      <main className='main'>
        <LeftBlock />
        <RightBlock>
          {/* // textBtn='кнопка' */}
          <Header textBtn='кнопка' />
          {persons.map((person) => (
            <Card key={person.id} {...person} />
          ))}
        </RightBlock>
      </main>
    </>
  );
}

export default App;
