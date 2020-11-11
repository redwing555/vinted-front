import React from "react";

import Banner from "../../assets/img/banner.jpeg";
import Tear from "../../assets/img/tear.svg";

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <img src={Banner} alt="" />
      <div>
        <h1>Prêts à faire du tri dans vos placards ?</h1>
        <button>Commencer à vendre</button>
        <p>Découvrir comment ça marche</p>
      </div>
      <div>
        <img src={Tear} alt="" />
      </div>
    </section>
  );
};

export default HeroBanner;
