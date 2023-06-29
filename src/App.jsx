import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomepageProvider/HomePageProvider";
import WelcomePage from "./components/Welcome/Welcome";
import RegistrationProvider from "./components/Registeration/RegistrationProvider";
import RegistrationConsumer from "./components/Registeration/RegistrationConsumer";
import Login_Consumer from "./components/Login/Login_Consumer";
import Login_Provider from "./components/Login/Login_Provider";
import ProfileProvider from "./components/Profile Provider/ProfileProvider";
import ProfileConsumer from "./components/ProfileConsumer/ProfileConsumer";
import Search from "./components/HomepageProvider/Search";
import Rewards from "./components/Rewards";
import Bidresults from "./components/HomepageProvider/bidresults";
import ConsumerDashboard from "./components/HomepageProvider/ConsumerDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/provider" element={<HomePage />} />
        <Route path="/consumer" element={<ConsumerDashboard isConsumer= {true}/>} />
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup/provider" element={<RegistrationProvider />} />
        <Route path="/signup/consumer" element={<RegistrationConsumer isConsumer= {true}/>} />
        <Route path="/login/provider" element={<Login_Provider />} />
        <Route path="/login/consumer" element={<Login_Consumer />} />
        <Route path="provider/profile" element={<ProfileProvider />} />
        <Route path="consumer/profile" element={<ProfileConsumer isConsumer= {true}/>} />
        <Route path="/provider/search" element={<Search />} />
        <Route path="/redeem" element={<Rewards isConsumer= {true}/>} />
        <Route path="/bids" element={<Bidresults isConsumer= {true}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
