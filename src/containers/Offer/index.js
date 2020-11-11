import React, { useState, useEffect } from "react";
import OfferItem from "../../components/OfferItem/index";
import Header from "../../components/Header/index";
import { useParams } from "react-router-dom";

import axios from "axios";

import Loading from "../../assets/img/loading.gif";

const Offer = () => {
  const [offer, setOffer] = useState([]);
  const [isOK, setIsOK] = useState(true);

  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      setOffer(response.data);
      setIsOK(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isOK === true ? (
    <div className="loading">
      <img src={Loading} alt="loading" />
    </div>
  ) : (
    <>
      <Header />
      <section className="offer-section">
        <OfferItem offer={offer} />
      </section>
    </>
  );
};

export default Offer;
