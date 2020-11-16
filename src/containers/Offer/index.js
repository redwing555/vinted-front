import React, { useState, useEffect } from "react";
import OfferItem from "../../components/OfferItem/index";
import { useParams } from "react-router-dom";
import Loader from "react-loader-spinner";

import axios from "axios";

const Offer = () => {
  const [offer, setOffer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setOffer(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading === true ? (
    <div className="loading">
      <Loader
        type="Oval"
        color="#09aeb8"
        height={100}
        width={100}
        timeout={99999}
      />{" "}
    </div>
  ) : (
    <>
      <section className="offer-section">
        <OfferItem offer={offer} />
      </section>
    </>
  );
};

export default Offer;
