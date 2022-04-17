import { createContext } from 'react';
import { Animes } from './contextInterfaces'

  const Context = createContext<Animes>({
    animes: [],
    setAnimes: () => {},
    nextPageNumber: 1,
    setNextPageNumber: () => {}
    });

export default Context;
