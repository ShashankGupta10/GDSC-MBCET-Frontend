import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import OutlinedCard from "../ConsumerDash/Stats";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <OutlinedCard />
      <Footer />
    </div>
  );
};

export default HomePage;
