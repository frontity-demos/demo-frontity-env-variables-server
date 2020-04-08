import React from "react";
import {connect} from 'frontity'

const Root = ({ state }) => {
  return (
    <>
      You can edit your package in:
      <pre>packages/custom-server-theme/src/index.js</pre>
      <pre>{ JSON.stringify(state.tmdb.detailsMovie) }</pre>
    </>
  );
};

export default connect(Root)