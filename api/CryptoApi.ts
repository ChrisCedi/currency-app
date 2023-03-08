import axios from 'axios';

export const CryptoApi = axios.create({
  baseURL: 'https://min-api.cryptocompare.com/data',
});
