import "./App.css";
import { LeftBlock } from "./components/LeftBlock";
import { RightBlock } from "./components/RightBlock";
import { ProfilePage } from "./pages/ProfilePage";

function App() {
  return (
    <>
      <main className='main'>
        <LeftBlock />
        <RightBlock>
          <ProfilePage />
        </RightBlock>
      </main>
    </>
  );
}

export default App;
