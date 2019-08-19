const axios = require('axios');

export const fetchRandomDog = async (breed) => {
  const resp = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
  return resp.data.message;
}
export const fetchDogBreeds = async () => {
  const resp = await axios.get('https://dog.ceo/api/breeds/list/all');
  return Object.keys(resp.data.message);
}