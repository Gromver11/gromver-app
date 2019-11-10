import React from 'react';
import styles from './TableOfResult.module.css';
import PropTypes from 'prop-types';
import RowsOfTable from './RowsOfTable';
const TableOfResult = ({ ids, list }) => {
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <th className={styles.caption}>Полное название репозитория</th>
          <th className={styles.caption}>Владелец</th>
          <th className={styles.caption}>Ссылка на репозиторий форка</th>
          <th className={styles.caption}>Кол-во звезд</th>
        </tr>
        <RowsOfTable ids={ids} list={list} />
      </tbody>
    </table>
  );
};

TableOfResult.propTypes = {
  ids: PropTypes.array.isRequired,
  list: PropTypes.object.isRequired,
};
export default TableOfResult;
