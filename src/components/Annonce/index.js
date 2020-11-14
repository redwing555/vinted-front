import React from "react";
import "./index.css";

const Annonce = () => {
  return (
    <section className="publish-section">
      <div>
        <h2>Vends ton article</h2>

        <form>
          <fieldset>
            <h3>Ajoute jusqu'à 10 photos</h3>
            <button>Hello</button>
          </fieldset>
          <fieldset>
            <div>
              <label htmlFor="">Titre</label>
              <input type="text" placeholder="ex:Chemise Sézane verte" />
            </div>

            <div>
              <label htmlFor="">Décris ton article</label>
              <input type="text" placeholder="ex:Chemise Sézane verte" />
            </div>
          </fieldset>

          <fieldset>
            <div>
              <label htmlFor="">Marque</label>
              <input type="text" placeholder="ex:Chemise Sézane verte" />
            </div>

            <div>
              <label htmlFor="">Taille</label>
              <input type="text" placeholder="ex:Chemise Sézane verte" />
            </div>

            <div>
              <label htmlFor="">Couleur</label>
              <input type="text" placeholder="ex:Chemise Sézane verte" />
            </div>

            <div>
              <label htmlFor="">État</label>
              <input type="text" placeholder="ex:Chemise Sézane verte" />
            </div>

            <div>
              <label htmlFor="">Lieu</label>
              <input type="text" placeholder="ex:Chemise Sézane verte" />
            </div>
          </fieldset>

          <fieldset>
            <div>
              {" "}
              <label htmlFor="">Prix</label>
              <input type="text" placeholder="ex:Chemise Sézane verte" />
            </div>

            <input
              type="checkbox"
              value="je suis intéressé(e) par les échanges"
            />
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Annonce;
