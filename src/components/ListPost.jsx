import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { find } from '../api/api'


const ListPost = ( { url } ) => { 

const [posts, setPosts] = useState([])

useEffect(() => {
  find(url, setPosts)
}, [url])

  return(
    <section className="posts container">
      { 
       posts.map((post)=> (
         <Link className={`card-post card-post--${post.categoria}`} to={`/posts/${post.idArquivo}`}>
           <article key={post.idArquivo}>
              <h3 className="card-post__title">
                {post.NomeArquivo}
              </h3>
              <p className="card-post__meta">{post.DataCriacao}</p>
           </article> 
         </Link>
       ))
       
      }
    </section>
  )
}

export default ListPost