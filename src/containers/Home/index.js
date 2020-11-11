import React, { useState, useEffect } from "react";
import ClothingItem from "../../components/ClothingItem";
import Header from "../../components/Header/index";
import HeroBanner from "../../components/HeroBanner/index";
import axios from "axios";

import Loading from "../../assets/img/loading.gif";

const Home = () => {
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setOffers(response.data.offers);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return isLoading === true ? (
    <div className="loading">
      <img src={Loading} alt="loading" />
    </div>
  ) : (
    <>
      <Header />
      <HeroBanner />
      <main>
        <ClothingItem offers={offers} />
      </main>
    </>
  );
};

export default Home;
