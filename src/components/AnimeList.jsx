import React, { useEffect, useContext } from 'react';
import Context from '../context/Context';
import { getAnimes } from '../API/aniapi';

function AnimeList() {
  const { animes, setAnimes } = useContext(Context);

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

  return (
    <div>
      {animes.length ? renderAnimes() : 'Loading...'}
    </div>
  );
}

export default AnimeList;