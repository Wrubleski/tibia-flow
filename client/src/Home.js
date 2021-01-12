import React from "react";
import background from "./assets/img/ClientBackground_Tibia11_Release.jpg";

const Home = () => {
  return (
    <div>
      <img
        className="home-img"
        src={background}
        alt="Client Background Summer Update 2011"
      />
      <h1 className="home-header">Em breve</h1>
    </div>
  );
};

export default Home;
