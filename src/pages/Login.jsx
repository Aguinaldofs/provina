import React from "react";
import { Link } from "react-router-dom";

import "../assets/css/components/card.css";

const Login = () => {
  return (
    <main>
      <section className="container flex flex--center">
        <article className="card">
          <form className="menu-form">
            <ul>
              <li>
                <label>Email </label>
              </li>
              <li>
                <input className="mytext"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@email.com"
                ></input>
              </li>
              <li>
                <label>Senha </label>
              </li>
              <li>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                ></input>
              </li>
              <li>
              <Link to="/register">
                  <h3>Não possui conta? Clique aqui para cadastrar!</h3>
                </Link>
              </li>
              <li>
                <Link to="/login" className="menu-item menu-item--green">
                  <h3>Entrar</h3>
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

export default Login;
