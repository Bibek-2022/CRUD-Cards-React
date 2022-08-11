import "./App.css";
import { Forms } from "./component/Forms";
import Login from "./pages/Login.js";
import { RegistrationForm } from "./pages/Registration.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/product" element={<Forms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
