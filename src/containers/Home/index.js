import React, { useState, useEffect } from "react";
import ClothingItem from "../../components/HomeItem";
import HeroBanner from "../../components/HeroBanner/index";
import Loader from "react-loader-spinner";
import axios from "axios";

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
      <Loader
        type="Oval"
        color="#09aeb8"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />{" "}
    </div>
  ) : (
    <>
      <HeroBanner />
      <main>
        <ClothingItem offers={offers} />
      </main>
    </>
  );
};

export default Home;
