import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomepageProvider/HomePageProvider";
import Bid from "./components/HomepageProvider/Bid";
import Welcome from "./components/Welcome/welcome";
import RegistrationProvider from "./components/Registeration/RegistrationProvider";
import RegistrationConsumer from "./components/Registeration/RegistrationConsumer";
import Login_Consumer from "./components/Login/Login_Consumer";
import Login_Provider from "./components/Login/Login_Provider";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home/provider" element={<HomePage />} />
        <Route path="/bid" element={<Bid />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/signup/provider" element={<RegistrationProvider />} />
        <Route path="/signup/consumer" element={<RegistrationConsumer />} />
        <Route path="/login/provider" element={<Login_Provider />} />
        <Route path="/login/consumer" element={<Login_Consumer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
