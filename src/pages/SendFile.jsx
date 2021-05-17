import React from "react";
import { faFileImport } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import "../assets/css/components/card.css";

const SendFile = () => {
  return (
    <main>
      <section className="container flex flex--center">
        <article className="card ">
          <div className="card flex flex--center">
            <button className="menu-item menu-item--purple">
              <FontAwesomeIcon icon={faFileImport} /> Adicionar Arquivo{" "}
            </button>
          </div>
          <form className="menu-form">
            <ul>
              <li>
                <label>Nome do Arquivo</label>
              </li>
              <li>
                <input
                  className="fileName"
                  type="text"
                  id="fileName"
                  name="fileName"
                  placeholder="Prova 1"
                ></input>
              </li>
              <li>
                <Link className="menu-item menu-item--green">
                  <h3>Enviar</h3>
                </Link>
              </li>
            </ul>

            <Link></Link>
          </form>
        </article>
      </section>
    </main>
  );
};

export default SendFile;
