//@ts-check
import React from "react";
import { useQuery } from "react-apollo";

import { favoriteQuery } from "../server/queries/shows"
import { FavoriteCardRender } from "../components/helpers/tile";
import "../components/helpers/card.scss";

const Favorite = () => {
  const { loading, data, error } = useQuery( favoriteQuery );
  if ( !data ) {
    return (
      <div>
        Loading.......
      </div>
    )
  }

  let allData = data?.favorite || ['']
  if (allData.length > 0) {
    return (
      <div className="form-container">
        {allData.map((item) => {
          return FavoriteCardRender(
            item.name,
            item.rating,
            item.summary,
            item.image,
            "Comment"
          );
        })}
      </div>
    );
  }
  else {
    return (
      <div>
        No favorited shows currently
      </div>
    )
  }
};

export default Favorite;
