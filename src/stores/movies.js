import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useLoaderStore } from './loader';
import Repository from '../services/RepositoryFactory';

const apiRest = Repository.get('api');


export const useMovieStore = defineStore('movies', () => {

  // STORES
  const loadStore = useLoaderStore();
  const { handlerLoader } = loadStore;

  // DATA
  const movies = ref([]);
  const numberMovies = ref(0);
  const numberFavorites = ref(0);

  // COMPUTED
  const getAllMoviesByPage = computed(() => {
    const moviesByPage = helperAssignPages(movies.value);
    return moviesByPage;
  });

  const getFavoritesByPage = computed(() => {
    const filteredMovies = movies.value.filter((movie) => movie.favorite === true && movie);
    numberFavorites.value = filteredMovies.length;
    const favoritesByPage = helperAssignPages(filteredMovies);
    return favoritesByPage;
  })

  // METHODS
  async function requestMovies() {
    if (movies.value.length === 0) {
      try {
        handlerLoader();
        const response = await apiRest.getMovies();
        const newMovies = response.data.results.map((movie) => {
          return { ...movie, favorite: false };
        })
        movies.value = [...newMovies];
        numberMovies.value = Number(response.data.results.length);
        return response
      } catch (error) {
        return error
      } finally {
        handlerLoader()
      }
    }
    return true
  }

  async function getMovieByID(imdb_id) {
    try {
      handlerLoader();
      const movieById = await apiRest.getMovieById(imdb_id)
      return movieById.data.results
    } catch (error) {
      return error
    } finally {
      handlerLoader()
    }
  }

  function helperAssignPages(arr) {
    const maxItems = 20;
    const arrOfPages = [];

    for (let i = 0; i < arr.length; i += maxItems) {
      arrOfPages.push(arr.slice(i, i + maxItems));
    }
    return arrOfPages
  }

  function assignFavorite(data) {
    movies.value = movies.value.map((movie) => {
      if (movie.imdb_id === data.imdb_id) {
        movie = data;
      }
      return movie;
    })
  }

  return { movies, numberMovies, numberFavorites, getAllMoviesByPage, getFavoritesByPage, requestMovies, assignFavorite, getMovieByID }
})