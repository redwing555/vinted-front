import React, { useState, useEffect } from "react";
import ClothingItem from "../../components/HomeItem";
import OrderByPrice from "../../components/OrderByPrice";
import HeroBanner from "../../components/HeroBanner/index";
import Loader from "react-loader-spinner";
import axios from "axios";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = ({ offers, setOffers, apiUrl, filter }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Nombre d'offres maximum par page
  const limit = 20;

  // State qui permet de donner le numéro de la page dynamiquement
  const [page, setPage] = useState(1);

  // State qui permet de calculer le nombre de page maximum
  const [pageMax, setPageMax] = useState(0);

  // State qui permet de trier par prix
  const [sort, setSort] = useState("");

  const tab = [];

  // Méthode qui permet d'afficher le nombre de pages dynamiquement
  const renderPages = () => {
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
          `${apiUrl}/offers?page=${page}&limit=${limit}&sort=${sort}${filter}`
        );
        setOffers(response.data.offers);
        setPageMax(Math.ceil(Number(response.data.count) / limit));

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [page, sort, filter, apiUrl, setOffers]);

  return (
    <>
      <HeroBanner />
      {isLoading === true ? (
        <div className="loading-home">
          <Loader
            type="Oval"
            color="#09aeb8"
            height={100}
            width={100}
            timeout={99999}
          />
        </div> ? (
          !setOffers
        ) : (
          <p>Aucun résultat ne correspond à la recherche</p>
        )
      ) : (
        <>
          <main>
            <OrderByPrice setSort={setSort} />
            <ClothingItem offers={offers} />
          </main>
          <div className="pages">{renderPages()}</div>
        </>
      )}
    </>
  );
};

export default Home;
