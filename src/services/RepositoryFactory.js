import ApiRepository from './ApiRepository';

// ADD ALL THE SERVICES YOU WANT
const services = {
  api: ApiRepository,
};

// DYNAMIC SERVICES
export default {
  get: (name) => services[name],
};