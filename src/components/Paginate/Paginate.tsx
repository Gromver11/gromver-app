import React, { useCallback } from 'react';
import styles from './Paginate.module.css';
import { useSelector } from 'react-redux';
import { selectTotalPages, selectIds } from '../../selectors';
import type { History, Location } from 'history';
import type { match as Match } from 'react-router-dom';

type PaginateProps = {
  location: Location;
  history: History;
  match: Match<{ info: string }>;
};

export const Paginate: React.FC<PaginateProps> = ({
  history,
  location,
  match,
}) => {
  const currentPage = Number(match.params.info.slice(12));

  const currentRep = location.search.slice(12);

  const totalPages = useSelector(selectTotalPages);

  const ids = useSelector(selectIds);

  const handleLoadNextPageClick = useCallback(() => {
    const nextPage = currentPage + 1;
    history.push(`/seacrh&page=${nextPage}?repository=${currentRep}`);
  }, [currentPage, currentRep, history]);
  const handleLoadPrevPageClick = useCallback(() => {
    const prevPage = currentPage - 1;
    history.push(`/seacrh&page=${prevPage}?repository=${currentRep}`);
  }, [currentPage, currentRep, history]);

  if (ids?.length !== 0 && totalPages === null) {
    return (
      <div className={styles.paginate}>
        <span className={styles.count}>
          {currentPage} of {currentPage}
        </span>
      </div>
    );
  }
  return totalPages !== null ? (
    <div className={styles.paginate}>
      {currentPage !== 1 && (
        <button
          className={`${styles.btn} btn`}
          onClick={handleLoadPrevPageClick}
        >
          {'<<'}
        </button>
      )}
      <span className={styles.count}>
        {currentPage} of {totalPages}
      </span>
      {currentPage !== totalPages && (
        <button
          className={`${styles.btn} btn`}
          onClick={handleLoadNextPageClick}
        >
          {'>>'}
        </button>
      )}
    </div>
  ) : null;
};
