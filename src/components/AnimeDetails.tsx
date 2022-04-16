import React from 'react';
import { useLocation } from 'react-router-dom';

interface Titles {
  en: string;
  rj: string;
}

interface Descriptions {
  en: string;
}

interface LocationState {
  banner_image: string;
  cover_image: string;
  descriptions: Descriptions;
  titles: Titles;
}
function AnimeDetails() {
  const location = useLocation();
  const state = location.state as LocationState

  return (
    <main>
      <img src={state.banner_image} alt="Anime Banner" style={{ maxWidth: '100%' }} />
      <h1>{state.titles.en || state.titles.rj}</h1>
      <section className="anime-section-details">
        <img src={state.cover_image} alt="Anime Cover" />
        <div dangerouslySetInnerHTML={{ __html: state.descriptions.en }} />
      </section>
    </main>
  );
}

export default AnimeDetails;
