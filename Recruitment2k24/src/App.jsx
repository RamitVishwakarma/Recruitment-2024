import Domains from "./components/Domains";
import Homepage from "./components/Homepage";
import RegistrationForm from "./components/RegistrationForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/domains" element={<Domains />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
