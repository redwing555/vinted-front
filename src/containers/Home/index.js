import React, { useState, useEffect } from "react";
import ClothingItem from "../../components/HomeItem";
import HeroBanner from "../../components/HeroBanner/index";
import Loader from "react-loader-spinner";
import axios from "axios";
import "./index.css";

const Home = ({
  offers,
  setOffers,
  page,
  setPage,
  limit,
  pageMax,
  setPageMax,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const renderPages = () => {
    const tab = [];

    for (let i = 1; i <= pageMax; i++) {
      tab.push(
        <span
          onClick={() => {
            setPage(i);
          }}
        >
          {i}
        </span>
      );
    }
    return tab;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?page=${page}&limit=${limit}`
        );
        setOffers(response.data.offers);
        setPageMax(Math.round(Number(response.data.count) / limit));

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [page]);

  return isLoading === true ? (
    <div className="loading">
      <Loader
        type="Oval"
        color="#09aeb8"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  ) : (
    <>
      <HeroBanner />
      <main>
        <ClothingItem offers={offers} />
      </main>
      <div className="pages">{renderPages()}</div>
    </>
  );
};

export default Home;
