import React, { useState } from "react";
import Dropzone from "react-dropzone";
import "./index.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

const Publish = ({ token }) => {
  let history = useHistory();

  const [title, setTitle] = useState("");
  const [file, setFile] = useState([]);
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
  const handlePrice = (ev) => {
    setPrice(Number(ev.target.value));
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

      history.push(`offer/${response.data._id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(file);

  return (
    <section className="publish-section">
      <div>
        <h2>Vends ton article</h2>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <h3>Ajoute jusqu'à 5 photos</h3>
            <div className="files-section">
              <Dropzone
                multiple={true}
                onDrop={(acceptedFiles) => setFile(acceptedFiles[0])}
              >
                {({ getRootProps, getInputProps }) => (
                  <section className="dragndrop">
                    <div className="dropzoneStyle" {...getRootProps()}>
                      <input multiple {...getInputProps()} />
                      <div>{file.name}</div>
                      <FontAwesomeIcon icon="upload" />

                      <p>Cliquez ou déposez vos fichiers</p>
                    </div>
                  </section>
                )}
              </Dropzone>
            </div>
          </fieldset>
          <fieldset>
            <div>
              <label>Titre</label>
              <input
                type="text"
                placeholder="ex : Chemise Sézane verte"
                onChange={handleTitle}
                value={title}
              />
            </div>

            <hr />

            <div>
              <label>Décris ton article</label>
              <textarea
                placeholder="ex : porté quelquefois, taille correctement"
                onChange={handleDescription}
                value={description}
              ></textarea>
            </div>
          </fieldset>

          <fieldset>
            <div>
              <label>Marque</label>
              <input
                type="text"
                placeholder="ex : Zara"
                onChange={handleBrand}
                value={brand}
              />
            </div>
            <hr />

            <div>
              <label>Taille</label>
              <input
                type="text"
                placeholder="ex : L / 42 / 12"
                onChange={handleSize}
                value={size}
              />
            </div>

            <hr />

            <div>
              <label>Couleur</label>
              <input
                type="text"
                placeholder="ex : Fuchsia"
                onChange={handleColor}
                value={color}
              />
            </div>

            <hr />

            <div>
              <label>État</label>
              <input
                type="text"
                placeholder="Indique l'état de ton article"
                onChange={handleCondition}
                value={condition}
              />
            </div>

            <hr />

            <div>
              <label>Lieu</label>
              <input
                type="text"
                placeholder="ex : Paris"
                onChange={handleCity}
                value={city}
              />
            </div>
          </fieldset>

          <fieldset>
            <div className="input-price">
              <label>Prix</label>
              <input
                type="text"
                placeholder="0,00 €"
                onChange={handlePrice}
                value={price}
              />
            </div>
            <div className="exchange">
              <div>
                <input type="checkbox" />
                <p>Je suis intéressé(e) par les échanges</p>
              </div>
            </div>
          </fieldset>
          <p className="cgu">
            Un vendeur professionnel se présentant comme un consommateur ou un
            non-professionnel sur Vinted encourt les sanctions prévues à
            l'article L 132-2 du code de la consommation.
          </p>
          <div className="submit-form">
            <input type="submit" value="Ajouter" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Publish;
