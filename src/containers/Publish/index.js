import React, { useState } from "react";
import Dropzone from "react-dropzone";
import "./index.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Publish = ({ token }) => {
  let history = useHistory();

  const [title, setTitle] = useState("");
  const [file, setFile] = useState({});
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

      history.push(`offer/${response.data.id}`);
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
              <Dropzone onDrop={(acceptedFiles) => setFile(acceptedFiles[0])}>
                {({ getRootProps, getInputProps }) => (
                  <section className="dragndrop">
                    <div className="dropzoneStyle" {...getRootProps()}>
                      <input {...getInputProps()} />
                      <div>{file.name}</div>
                      <p>
                        Faîtes glisser les fichiers que vous souhaitez envoyer
                      </p>
                    </div>
                  </section>
                )}
              </Dropzone>
              {/* <input multiple={true} type="file" onChange={handleFile} /> */}
            </div>
          </fieldset>
          <fieldset>
            <div>
              <label>Titre</label>
              <input
                type="text"
                placeholder="ex:Chemise Sézane verte"
                onChange={handleTitle}
                value={title}
              />
            </div>

            <hr />

            <div>
              <label>Décris ton article</label>

              <input
                type="textarea"
                placeholder="ex:porté quelquefois, taille correctement"
                onChange={handleDescription}
                value={description}
              />
            </div>
          </fieldset>

          <fieldset>
            <div>
              <label>Marque</label>
              <input
                type="text"
                placeholder="ex:Chemise Sézane verte"
                onChange={handleBrand}
                value={brand}
              />
            </div>
            <hr />

            <div>
              <label>Taille</label>
              <input
                type="text"
                placeholder="ex:Chemise Sézane verte"
                onChange={handleSize}
                value={size}
              />
            </div>

            <hr />

            <div>
              <label>Couleur</label>
              <input
                type="text"
                placeholder="ex:Chemise Sézane verte"
                onChange={handleColor}
                value={color}
              />
            </div>

            <hr />

            <div>
              <label>État</label>
              <input
                type="text"
                placeholder="ex:Chemise Sézane verte"
                onChange={handleCondition}
                value={condition}
              />
            </div>

            <hr />

            <div>
              <label>Lieu</label>
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
              <label>Prix</label>
              <input
                type="text"
                placeholder="ex:Chemise Sézane verte"
                onChange={handlePrice}
                value={price}
              />
            </div>

            <input
              type="checkbox"
              value="je suis intéressé(e) par les échanges"
            />
          </fieldset>
          <p>
            Un vendeur professionnel se présentant comme un consommateur ou un
            non-professionnel sur Vinted encourt les sanctions prévues à
            l'article L 132-2 du code de la consommation.
          </p>
          <input type="submit" value="Ajouter" />
        </form>
      </div>
    </section>
  );
};

export default Publish;
