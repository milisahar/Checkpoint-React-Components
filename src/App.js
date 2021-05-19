
import './App.css';
import Profilepicture from "./Component/Profile/ProfilePhoto";
import Name from "./Component/Profile/FullName";
import Adress from "./Component/Profile/Address";

function App() {
  return (
    <div className="App">
      <Profilepicture/>
      <Name/>
      <Adress/>
    </div>
  );
}

export default App;
