import { useEffect } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { LeftBlock } from "./components/LeftBlock";
import { RightBlock } from "./components/RightBlock";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { UsersPage } from "./pages/UsersPage";
import { useGetUsersQuery } from "./redux/api/usersApi";
import { addUsers } from "./redux/reducers/personsSlice";

function App() {
  return (
    <>
      <main className='main'>
        <LeftBlock />
        <RightBlock>
          <UsersPage />
        </RightBlock>
      </main>
    </>
  );
}

export default App;
