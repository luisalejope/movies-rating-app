import axios from 'axios';

const externalApiBase = 'https://moviesminidatabase.p.rapidapi.com';

const apiClient = axios.create({
  baseURL: `${externalApiBase}`,
});

const injectHeaders = async (config) => {
  try {
    const newConfig = config;
    newConfig.headers = {
      'X-RapidAPI-Key': 'c9ab72d975mshdf9b0ab179ae696p1fc4cdjsnb7b8f61f6778',
      'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
    };
    return newConfig;
  } catch (error) {
    throw new Error('Unauthorized');
  }
};

apiClient.interceptors.request.use(injectHeaders);

export default apiClient;