interface Titles {
    rj: 'string';
    en?: 'string'
  }

interface Anime {
    anilist_id: number,
    titles: Titles,
    cover_image: string,
  }

  interface Animes {
    animes: Anime[],
    setAnimes: React.Dispatch<React.SetStateAction<Anime[]>>,
    nextPageNumber: number,
    setNextPageNumber: React.Dispatch<React.SetStateAction<number>>
  
  }

  export { Titles, Anime, Animes }
  