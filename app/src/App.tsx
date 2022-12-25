import { useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { LeftBlock } from "./components/LeftBlock";
import { RightBlock } from "./components/RightBlock";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { useGetUsersQuery } from "./redux/api/usersApi";
import { addUsers } from "./redux/reducers/personsSlice";

const LeftTitle = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: var(--fw-bold);
  font-size: 24px;
  line-height: 28px;
  /* padding: 0 5%; */
  /* color: #000000; */
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const RightTitle = styled.h1`
  font-family: var(--family);
  font-weight: var(--fw-bold);
  font-size: 28px;
  line-height: 30px;
`;

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
        <LeftBlock>
          <LeftTitle>Сортировка</LeftTitle>
          <Button color='white'>По городу</Button>
          <Button color='white'>По компаниям</Button>
        </LeftBlock>
        <RightBlock>
          <HeaderWrapper>
            <RightTitle>Список пользователей</RightTitle>
          </HeaderWrapper>
          {persons.map((person) => (
            <Card key={person.id} {...person} />
          ))}
        </RightBlock>
      </main>
    </>
  );
}

export default App;
