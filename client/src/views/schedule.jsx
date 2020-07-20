//@ts-check
import React from "react";
import { useQuery, useMutation } from "react-apollo";

import { scheduleQuery } from "../server/queries/shows"
import { watchMutation } from "../server/mutations/shows";
import { toastNotification } from "../components/helpers/toast"

import { ScheduledCardRender } from "../components/helpers/tile";
import "../components/helpers/card.scss";


const Schedule = () => {
  const [watchAddMutation] = useMutation(watchMutation, {
    errorPolicy: "none",
    fetchPolicy: "no-cache",
  });
  const watchHandler = async (props) => {
    const { name, image, summary, rating } = props;

    try {
      const { data } = await watchAddMutation({
        variables: {
          input: { name: name, image: image, summary: summary, rating: rating },
        },
      });
      if ( data ) {
        toastNotification('success', `Successfully added to watched shows`);
      }
      else {
        toastNotification('success', `An error occured`);
      }
    } catch (err) {
      console.log(err, "err");
    }
  };

  const { loading, data, error } = useQuery( scheduleQuery );
  if ( !data ) {
    return (
      <div>
        Loading.......
      </div>
    )
  }

  let allData = data?.schedule || ['']
  if ( allData.length > 0) {
    return (
      <div className="form-container">
        {allData.map((item) => {
          return ScheduledCardRender(
            item.name,
            item.rating,
            item.summary,
            item.image,
            watchHandler
          );
        })}
      </div>
    );
  }
  else {
    return (
      <div>
        No scheduled shows currently
      </div>
    )
  }
};

export default Schedule;
