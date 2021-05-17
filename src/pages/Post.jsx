import React, { useEffect, useState } from "react";
import { find } from "../api/api";
import { useParams } from "react-router-dom";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    find(`/posts/${id}`, setPost);
  }, [id]);

  return (
    <main>
      <div className="container flex flex--center">
        <article className="card post">
          <h1 className="card__title">{post.NomeArquivo} - {post.NomeAutor}</h1>
          <p className="card__text">{post.Body}</p>
          <button className="menu-item menu-item--purple"><FontAwesomeIcon icon={faFileDownload} /> Baixar </button>
        </article>
      </div>
      <div className="container flex flex--center">
      <article className="card post">
      <h2 className="card__title">Escrever comentário</h2>
      <form>
        <textarea id="textarea" name="textarea" rows="4" cols="50">
        </textarea>
        <button className="menu-item menu-item--purple"> Enviar </button>
      </form>

      </article>
      </div>
      
    </main>
  );
};

export default Post;
