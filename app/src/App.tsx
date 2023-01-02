import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LeftBlock } from "./components/LeftBlock";
import NotFound from "./components/NotFound";
import { RightBlock } from "./components/RightBlock";
import { ProfilePage } from "./pages/ProfilePage";
import { UsersPage } from "./pages/usersPage";

function App() {
  return (
    <>
      <main className='main'>
        <LeftBlock />
        <RightBlock>
          <Routes>
            <Route path="/" element={ <UsersPage />} />
            <Route path="/user/:id" element={ <ProfilePage />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </RightBlock>
      </main>
    </>
  );
}

export default App;
