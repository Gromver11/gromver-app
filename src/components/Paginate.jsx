import React from 'react';
import styles from './Paginate.module.css';
import PropTypes from 'prop-types';
const Paginate = props => {
  if (props.currentPage === 1 && props.totalPages === null) {
    return (
      <div className={styles.paginate}>
        <span className={styles.count}>
          {props.currentPage} из {props.currentPage}
        </span>
      </div>
    );
  }
  return (
    <div className={styles.paginate}>
      {props.currentPage !== 1 && (
        <button className={`${styles.btn} btn`} onClick={props.onLoadPrevPage}>
          {'<<'}
        </button>
      )}
      <span className={styles.count}>
        {props.currentPage} of {props.totalPages}
      </span>
      {props.currentPage !== props.totalPages && (
        <button className={`${styles.btn} btn`} onClick={props.onLoadNextPage}>
          {'>>'}
        </button>
      )}
    </div>
  );
};
Paginate.propTypes = {
  currentPage: PropTypes.number.isRequired,
  onLoadNextPage: PropTypes.func.isRequired,
  onLoadPrevPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number,
};

export default Paginate;
