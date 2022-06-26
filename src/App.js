import "./App.css";
import { Forms } from "./component/Forms";

function App() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="App">
      <Forms handleOnSubmit={handleOnSubmit} />
      <hr />
    </div>
  );
}

export default App;
