//@ts-check
import fetch from "node-fetch";
import { pagination, BASE_URL } from "../../utils";

/**
 * @param {any} _
 */
const shows = async (_, { pageSize, after }) => {
  let shows = await fetch(`${BASE_URL}/shows?page=1`).then((res) => res.json());

  let results = shows.map((item) => {
    let summar = item?.summary.split('<p>').join('').split('<b>').join('').split('</b>').join('').split('</p>').join('')

    return {
    name: item?.name,
    summary: summar,
    url: item?.url,
    image: item?.image?.original,
    rating: item?.rating?.average,
  }
  });

  let show = pagination({ after, pageSize, results: results });

  return show;
};

/**
 * @param {any} _
 */
const showSearch = async (_, { pageSize, after, query }) => {
  let shows = await fetch(`${BASE_URL}/search/shows?q=${query}`).then((res) =>
    res.json()
  );
  let results = shows.map((item) => ({
    name: item?.show?.name,
    summary: item?.show?.summary,
    url: item?.show?.url,
    image: item?.show?.image?.original,
    rating: item?.show?.rating?.average,
  }));

  let show = pagination({ after, pageSize, results: results });

  return show;
};

export default {
  shows,
  showSearch,
};
