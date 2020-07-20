//@ts-check
import React from "react";
import { useQuery, useMutation } from "react-apollo";

import { HomeCardRender } from "../components/helpers/tile";
import { showsQuery } from "../server/queries/shows";
import { scheduleMutation, watchMutation } from "../server/mutations/shows";
import { toastNotification } from "../components/helpers/toast"
import "../components/helpers/card.scss";

const Shows = () => {
  const [scheduleAddMutation] = useMutation(scheduleMutation, {
    errorPolicy: "none",
    fetchPolicy: "no-cache",
  });
  const scheduleHandler = async (props) => {
    const { name, image, summary, rating } = props;

    try {
      const { data } = await scheduleAddMutation({
        variables: {
          input: { name: name, image: image, summary: summary, rating: rating },
        },
      });
      if ( data ) {
        toastNotification('success', `Successfully added to scheduled shows`);
      }
      else {
        toastNotification('success', `An error occured`);
      }
    } catch (err) {
      console.log(err, "err");
    }
  };

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

  const { loading, data, error } = useQuery(showsQuery, {
    variables: { pageSize: 30, after: "5" },
  });
  if (!data) {
    return <div>Loading.......</div>;
  }
  let allData = data?.shows || [""];

  return (
    <div className="form-container">
      {allData.map((item) => {
        return HomeCardRender(item.name, item.rating, item.summary, item.image, scheduleHandler,watchHandler);
      })}
    </div>
  );
};

export default Shows;
