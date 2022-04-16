import React, { useContext } from 'react';
import Context from '../context/Context';
import { getNextPage } from '../API/aniapi';

function Pagination() {
  const { nextPageNumber, setNextPageNumber, setAnimes } = useContext(Context);

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
    </div>
  );
}

export default Pagination;
