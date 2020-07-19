//@ts-check
import React from "react";

import { WatchedCardRender } from "../components/helpers/tile";
import "../components/helpers/card.scss";

let array1 = [
  {
    name: "Girls",
    rating: 6.7,
    image:
      "http://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg",
    summary:
      "This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>",
  },
  {
    name: "Girls",
    rating: 6.7,
    image:
      "http://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg",
    summary:
      "This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>",
  },
  {
    name: "Girls",
    rating: 6.7,
    image:
      "http://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg",
    summary:
      "This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>",
  },
  {
    name: "Girls",
    rating: 6.7,
    image:
      "http://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg",
    summary:
      "This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>",
  },
  {
    name: "Girls",
    rating: 6.7,
    image:
      "http://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg",
    summary:
      "This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>",
  },
];
const Watched = () => {
  return (
    <div className="form-container">
      {array1.map((item) => {
        return WatchedCardRender(
          item.name,
          item.rating,
          item.summary,
          item.image,
          "Comment"
        );
      })}
    </div>
  );
};

export default Watched;
