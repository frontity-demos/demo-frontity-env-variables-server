import React from "react";
import {connect} from 'frontity'

import Link from "./Link";
import List from "./List";
import Post from "./Post";

const Root = ({ state }) => {

  const dataCurrentLink = state.source.get(state.router.link);

  return (
    <>
    <h1>⚡️ Demo Environment Variables</h1>
      <p>Estamos en {state.router.link}</p>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/page/2">Home - page 2</Link>
        <Link href="/informacion/faq/">Frequently Asked Questions</Link>
      </nav>
      <hr />
      <main>
        {dataCurrentLink.isArchive && <List />}
        {dataCurrentLink.isPost && <Post />}
        {dataCurrentLink.isPage && <Post />}
      </main>
      <p>Data from https://www.themoviedb.org/:</p>
      <ul>
        <li><strong>Title</strong> { state.tmdb.detailsMovie.original_title }</li>
        <li><strong>Description</strong> { state.tmdb.detailsMovie.overview }</li>
      </ul> 
    </>
  );

 
};

export default connect(Root)