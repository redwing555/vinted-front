import React, { useState } from "react";
import "./index.css";
import axios from "axios";

const Annonce = ({ token }) => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState();
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  const handleTitle = (ev) => {
    setTitle(ev.target.value);
  };

  const handleDescription = (ev) => {
    setDescription(ev.target.value);
  };

  const handleBrand = (ev) => {
    setBrand(ev.target.value);
  };

  const handleColor = (ev) => {
    setColor(ev.target.value);
  };

  const handleSize = (ev) => {
    setSize(ev.target.value);
  };

  const handleCondition = (ev) => {
    setCondition(ev.target.value);
  };
  const handleCity = (ev) => {
    setCity(ev.target.value);
  };

  const handleFile = (ev) => {
    setFile(ev.target.files[0]);
  };

  const handlePrice = (ev) => {
    setPrice(ev.target.value);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const params = new FormData();
      params.append("price", price);
      params.append("condition", condition);
      params.append("brand", brand);
      params.append("size", size);
      params.append("description", description);
      params.append("title", title);
      params.append("color", color);
      params.append("picture", file);
      params.append("city", city);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        params,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="publish-section">
      <div>
        <h2>Vends ton article</h2>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <h3>Ajoute jusqu'à 10 photos</h3>
            <input type="file" onChange={handleFile} />
          </fieldset>
          <fieldset>
            <div>
              <label htmlFor="">Titre</label>
              <input
                type="text"
                placeholder="ex:Chemise Sézane verte"
                onChange={handleTitle}
                value={title}
              />
            </div>

            <div>
              <label htmlFor="">Décris ton article</label>
              <input
                type="text"
                placeholder="ex:Chemise Sézane verte"
                onChange={handleDescription}
                value={description}
              />
            </div>
          </fieldset>

          <fieldset>
            <div>
              <label htmlFor="">Marque</label>
              <input
                type="text"
                placeholder="ex:Chemise Sézane verte"
                onChange={handleBrand}
                value={brand}
              />
            </div>

            <div>
              <label htmlFor="">Taille</label>
              <input
                type="text"
                placeholder="ex:Chemise Sézane verte"
                onChange={handleSize}
                value={size}
              />
            </div>

            <div>
              <label htmlFor="">Couleur</label>
              <input
                type="text"
                placeholder="ex:Chemise Sézane verte"
                onChange={handleColor}
                value={color}
              />
            </div>

            <div>
              <label htmlFor="">État</label>
              <input
                type="text"
                placeholder="ex:Chemise Sézane verte"
                onChange={handleCondition}
                value={condition}
              />
            </div>

            <div>
              <label htmlFor="">Lieu</label>
              <input
                type="text"
                placeholder="ex:Chemise Sézane verte"
                onChange={handleCity}
                value={city}
              />
            </div>
          </fieldset>

          <fieldset>
            <div>
              <label htmlFor="">Prix</label>
              <input
                type="text"
                placeholder="ex:Chemise Sézane verte"
                onChange={handlePrice}
                value={price}
              />
            </div>

            {/* <input
              type="checkbox"
              value="je suis intéressé(e) par les échanges"
            /> */}
          </fieldset>
          <input type="submit" value="Ajouter" />
        </form>
      </div>
    </section>
  );
};

export default Annonce;
