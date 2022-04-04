import axios from 'axios';

const baseEndPoint = 'https://api.aniapi.com';
const listOfAnimeEndPoint = '/v1/anime';
const pagination = (n) => `?page=${n}`;

const getAnimes = async () => axios.get(`${baseEndPoint}${listOfAnimeEndPoint}`);

const getNextPage = async (n) => axios.get(`${baseEndPoint}${listOfAnimeEndPoint}${pagination(n)}`);

export { getAnimes, getNextPage };
