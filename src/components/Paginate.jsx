import React from 'react';
import styles from './Paginate.module.css';
import { useSelector } from 'react-redux';
import { selectTotalPages } from '../store/TableOfResults/selectors';
import {selectIds} from '../store/TableOfResults/selectors'
const Paginate = ({history, location, match}) => {


  const currentPage = Number(match.params.info.slice(12))

  const currentRep = location.search.slice(12);

  const ids = useSelector(selectIds)

  const handleLoadNextPageClick =  () => {
    const nextPage = currentPage + 1;
    history.push(`/seacrh&page=${nextPage}?repository=${currentRep}`);
  };
  const handleLoadPrevPageClick = () => {
    const prevPage = currentPage - 1;
    history.push(`/seacrh&page=${prevPage}?repository=${currentRep}`);
  }
  const totalPages = useSelector(selectTotalPages);

  if (  ids.length!==0 && totalPages === null) {
    return (
      <div className={styles.paginate}>
        <span className={styles.count}>
          {currentPage}  of {currentPage}
        </span>
      </div>
    );
  }
  return totalPages!==null ? (
    
    <div className={styles.paginate}>
      {currentPage !== 1 && (
        <button className={`${styles.btn} btn`} onClick={handleLoadPrevPageClick}>
          {'<<'}
        </button>
      )}
      <span className={styles.count}>
        {currentPage} of {totalPages}
      </span>
      {currentPage !== totalPages && (
        <button className={`${styles.btn} btn`} onClick={handleLoadNextPageClick}>
          {'>>'}
        </button>
      )}
    </div>
  ) : null;
};

export default Paginate
