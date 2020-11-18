import React, { useState, useEffect, useMemo } from "react";
import { useDropzone } from "react-dropzone";

import "./index.css";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

const Publish = ({ token, apiUrl }) => {
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

  console.log(file);

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
        `http://localhost:3000/offer/publish`,
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
  const [files, setFiles] = useState([]);

  const {
    acceptedFiles,
    isDragActive,
    isDragAccept,
    isDragReject,
    getRootProps,
    getInputProps,
    // fileRejections,
  } = useDropzone({
    accept: "image/jpeg, image/png, image/jpg",
    maxFiles: 5,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbsContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
  };

  const thumb = {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: 50,
    height: 50,
    padding: 4,
    boxSizing: "border-box",
  };

  const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden",
  };

  const img = {
    display: "block",
    width: "auto",
    height: "100%",
  };

  const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px",
    cursor: "pointer",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  };

  const activeStyle = {
    borderColor: "#2196f3",
  };

  const acceptStyle = {
    borderColor: "#00e676",
  };

  const rejectStyle = {
    borderColor: "#ff1744",
  };

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  useEffect(() => {
    setFile(acceptedFiles);
  }, [acceptedFiles]);

  // const files = acceptedFiles.map((file) => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //   </li>
  // ));

  // const fileRejectionItems = fileRejections.map(({ file, errors }) => {
  //   return (
  //     <li key={file.path}>
  //       {file.path} - {file.size} bytes
  //       <ul>
  //         {errors.map((e) => (
  //           <li key={e.code}>{e.message}</li>
  //         ))}
  //       </ul>
  //     </li>
  //   );
  // });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return token ? (
    <section className="publish-section">
      <div>
        <h2>Vends ton article</h2>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <h3>Ajoute jusqu'à 5 photos</h3>
            <div className="files-section">
              <section className="container">
                <div {...getRootProps({ style })}>
                  <input {...getInputProps()} />
                  <p>
                    Cliquez ou glissez les fichiers que vous souhaitez
                    sélectionner
                  </p>
                </div>
                <aside style={thumbsContainer}>
                  {thumbs}
                  {/* 
                  <ul>{files}</ul>
                  <ul>{fileRejectionItems}</ul> */}
                </aside>
              </section>
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
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { fromPublish: true },
      }}
    />
  );
};

export default Publish;
