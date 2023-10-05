import ApiClient from './clients/ApiClient';

// ADD ALL THE RESTFUL REQUEST YOU WANT
export default {
  getMovieById(imdb_id) {
    return ApiClient.get(`movie/id/${imdb_id}`);
  },
  getMovies() {
    return ApiClient.get(`movie/byYear/2010`);
  },
};