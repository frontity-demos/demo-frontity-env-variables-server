import { config } from "dotenv";
import { fetch } from "frontity";
import packageClient from "./client";

// Launch dotenv.
config();

export default {
  ...packageClient,
  actions: {
    // beforeSSR: async () => {
    //   const {API_TMDB} = process.env
    //   const URL = `https://api.themoviedb.org/3/movie/550?api_key=${API_TMDB}`
    //   const data = await fetch(URL)
    //   console.log(data)
    // },
    beforeSSR: ({ state, libraries }) => {
      console.log('Gonna SSR this page');
    },
    ...packageClient.actions,
  },
};