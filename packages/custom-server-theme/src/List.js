import React from "react";
import { connect } from "frontity";
import Link from "./Link";

const List = ({ state }) => {
  const dataCurrentLink = state.source.get(state.router.link);

  return (
    <div>
      {dataCurrentLink.items.map(({ id }) => {
        const post = state.source.post[id];
        return (
          <Link key={id} href={post.link}>
            {post.title.rendered}
          </Link>
        );
      })}
    </div>
  );
};

export default connect(List);