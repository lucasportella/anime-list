import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import {Context} from '../context/Provider';
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
      <Link state={anime} to={`/animes/${anime.anilist_id}`}>
        <h3>
          {anime.titles.en ? anime.titles.en : anime.titles.rj}
        </h3>
      </Link>
      <img src={anime.cover_image} alt="Anime Cover" />
    </section>
  ));

  return (
    <div>
      {animes.length ? renderAnimes() : 'Loading...'}
    </div>
  );
}

export default AnimeList;
