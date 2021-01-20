import React, { useState } from "react";
import background from "./assets/img/ClientBackground_Tibia11_Release.jpg";
import axios from "axios";

const Home = () => {
  const [loot, setLoot] = useState("");

  const handleInput = (e) => {
    setLoot(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://tibia-flow-server-production.herokuapp.com/api/loot",
      data: { lootString: loot },
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <img
        className="home-img"
        src={background}
        alt="Client Background Summer Update 2011"
      />
      <h1 className="home-header">Teste</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="loot">Loot</label>
          <input type="text" name="loot" value={loot} onChange={handleInput} />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
