import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home.jsx';
import Login from './components/pages/Login.jsx';
import SignUp from "./components/pages/Signup.jsx";
import NewBooking from "./components/pages/NewBooking.jsx";
import Confirmation from "./components/pages/Confirmation.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/new-booking" element={<NewBooking />} />
          <Route path="/confirm" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App