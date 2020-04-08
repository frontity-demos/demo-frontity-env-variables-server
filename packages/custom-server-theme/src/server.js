import { config } from "dotenv";
import { fetch } from "frontity";
import packageClient from "./client";

// Launch dotenv.
config();

export default {
  ...packageClient,
  actions: {
    theme: {
      ...packageClient.actions.theme,
      beforeSSR: async ({ state }) => {
        const {API_TMDB} = process.env
        const URL = `https://api.themoviedb.org/3/movie/550?api_key=${API_TMDB}`
        const detailsMovie = await fetch(URL)
          .then( response => response.json() )
        state.tmdb = { detailsMovie }
      }
      // beforeSSR: ({ state, libraries }) => {
      //   console.log('Gonna SSR this page');
      // },
    }
  },
};