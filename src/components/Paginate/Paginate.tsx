import React from 'react';
import styles from './Paginate.module.css';
import { useSelector } from 'react-redux';
import { selectTotalPages, selectIds } from '../../utils';
import type { History, Location } from 'history';
import type { match as Match } from 'react-router-dom';
import Button from '@mui/material/Button';

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

  const currentRepository = location.search.slice(12);

  const totalPages = useSelector(selectTotalPages);

  const ids = useSelector(selectIds);

  const handleLoadNextPageClick = () => {
    const nextPage = currentPage + 1;
    history.push(`/seacrh&page=${nextPage}?repository=${currentRepository}`);
  };
  const handleLoadPrevPageClick = () => {
    const prevPage = currentPage - 1;
    history.push(`/seacrh&page=${prevPage}?repository=${currentRepository}`);
  };

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
        <Button
          onClick={handleLoadPrevPageClick}
          variant="contained"
          color="primary"
        >
          {'<<'}
        </Button>
      )}
      <span className={styles.count}>
        {currentPage} of {totalPages}
      </span>
      {currentPage !== totalPages && (
        <Button
          color="primary"
          variant="contained"
          onClick={handleLoadNextPageClick}
        >
          {'>>'}
        </Button>
      )}
    </div>
  ) : null;
};
