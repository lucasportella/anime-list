import React, { useEffect, useState } from 'react';
import { getAnimes, getNextPage } from '../API/aniapi';

function AnimeList() {
  const [animes, setAnimes] = useState([]);
  const [nextPageNumber, setNextPageNumber] = useState(1);

  const fetchData = async () => {
    const { data } = await getAnimes();
    setAnimes(data.data.documents);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderAnimes = () => animes.map((anime) => (
    <section className="anime-section" key={anime.anilist_id}>
      <h3>{anime.titles.en ? anime.titles.en : anime.titles.rj}</h3>
      <img src={anime.cover_image} alt="anime cover" />
    </section>
  ));

  const nextPage = async () => {
    const number = nextPageNumber + 1;
    const { data } = await getNextPage(number);
    setAnimes(data.data.documents);
    setNextPageNumber(number);
  };

  const prevPage = async () => {
    const number = nextPageNumber - 1;
    const { data } = await getNextPage(number);
    setAnimes(data.data.documents);
    setNextPageNumber(number);
  };
  return (
    <div>
      {nextPageNumber > 1 ? <button type="button" onClick={prevPage}>Previous Page</button> : null}
      <button type="button" onClick={nextPage}>Next Page</button>
      {animes.length ? renderAnimes() : 'Loading...'}
    </div>
  );
}

export default AnimeList;
