//@ts-check
import React from "react";
import { useQuery, useMutation } from "react-apollo";

import { watchQuery } from "../server/queries/shows"
import { updateWatchStatus } from "../server/mutations/shows"
import { WatchedCardRender } from "../components/helpers/tile";
import { toastNotification } from "../components/helpers/toast"

import "../components/helpers/card.scss";

const Watched = () => {
  const [watchAddMutation] = useMutation(updateWatchStatus, {
    errorPolicy: "none",
    fetchPolicy: "no-cache",
  });
  const watchHandler = async (props) => {
    const { id } = props;

    try {
      const { data } = await watchAddMutation({
        variables: {
          id: id,
          data: {  favorite: true },
        },
      });
      if ( data ) {
        toastNotification('success', `Successfully added to favorite shows`);
      }
      else {
        toastNotification('success', `An error occured`);
      }
    } catch (err) {
      console.log(err, "err");
    }
  };
  const { loading, data, error } = useQuery( watchQuery );
  if ( !data ) {
    return (
      <div>
        Loading.......
      </div>
    )
  }

  let allData = data?.watchList || ['']
  if (allData.length > 0) {
    return (
      <div className="form-container">
        {allData.map((item) => {
          return WatchedCardRender(
            item.name,
            item.rating,
            item.summary,
            item.image,
            watchHandler,
            item.id
          );
        })}
      </div>
    )
  }
  else {
    return (
      <div>
        No watched shows currently
      </div>
    )
  }
  ;
};

export default Watched;
