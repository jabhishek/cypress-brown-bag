import { request } from './request';
const API_URL = '/api';

export const searchStores = async (param) => {
  return request(`${API_URL}/search/${param}`);
};

export const getStoreByCode = async (code) => {
  return request(`${API_URL}/store/${code}`);
};
