import React from "react";
import { connect } from "frontity";

const Post = ({ state }) => {
  const dataCurrentLink = state.source.get(state.router.link);
  const post = state.source[dataCurrentLink.type][dataCurrentLink.id];

  return (
    <div>
      <p>Data from https://www.themoviedb.org/:</p>

      <ul>
        <li>
          <strong>Title</strong> {state.tmdb.detailsMovie.original_title}
        </li>
        <li>
          <strong>Description</strong> {state.tmdb.detailsMovie.overview}
        </li>
      </ul>
      <hr />
      <h2>{post.title.rendered}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
};

export default connect(Post);
