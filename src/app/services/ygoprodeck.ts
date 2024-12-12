import axios from 'axios';

const API_BASE_URL = 'https://db.ygoprodeck.com/api/v7';
console.log(API_BASE_URL,'API_BASE_URL');

export const fetchCards = async () => {
  const response = await axios.get(`${API_BASE_URL}/cardinfo.php`);
  return response.data;
};

export const fetchCardById = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/cardinfo.php?id=${id}`);
  return response.data;
};
