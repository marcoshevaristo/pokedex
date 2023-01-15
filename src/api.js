import axios from 'axios';
import { environment } from './env';

const api = axios.create({
  baseURL: environment.pokeApi,
});

export default api;
