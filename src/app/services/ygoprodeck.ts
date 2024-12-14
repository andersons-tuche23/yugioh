import axios from 'axios';

const API_BASE_URL = 'https://db.ygoprodeck.com/api/v7';

export const fetchCards = async () => {
 return response.data;
};  const response = await axios.get(`${API_BASE_URL}/cardinfo.php`);
 

export const fetchCardById = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/cardinfo.php?id=${id}`);
  return response.data;
};
