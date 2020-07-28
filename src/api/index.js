const API_URL = '/api';

const request = (url) => {
  return fetch(url).then((r) => r.json());
};

export const searchStores = async (param) => {
  return request(`${API_URL}/search/${param}`);
};

export const fetchAllStores = async () => {
  return request(`${API_URL}/store/all`);
};

export const getStoreByCode = async (code) => {
  return request(`${API_URL}/store/${code}`);
};
