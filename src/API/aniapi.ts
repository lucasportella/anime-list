import axios from 'axios';

const baseEndPoint = 'https://api.aniapi.com';
const listOfAnimeEndPoint = '/v1/anime';
const pagination = (n: number) => `?page=${n}`;

const getAnimes = async () => axios.get(`${baseEndPoint}${listOfAnimeEndPoint}`);

const getNextPage = async (n: number) => axios.get(`${baseEndPoint}${listOfAnimeEndPoint}${pagination(n)}`);

export { getAnimes, getNextPage };

// test sign 
