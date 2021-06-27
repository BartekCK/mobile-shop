import axios from 'axios';

const ApiURL = `http://${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}`;
const ApiResourcesURL = `${ApiURL}/resources`;

const ApiInstance = axios.create({
  baseURL: ApiURL,
});

export { ApiInstance, ApiURL, ApiResourcesURL };
