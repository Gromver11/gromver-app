import React from 'react';
import PropTypes from 'prop-types';
import styles from './RowsOfTable.module.css';
const RowsOfTable = ({ ids, list }) => {
  return ids.map(el => (
    <tr key={list[el].id}>
      <td className={styles.cell}>{list[el]['full_name']}</td>
      <td className={styles.cell}>{list[el].owner.login}</td>
      <td className={styles.cell}>{list[el]['html_url']}</td>
      <td className={styles.cell}>{list[el]['stargazers_count']}</td>
    </tr>
  ));
};
RowsOfTable.propTypes = {
  ids: PropTypes.array.isRequired,
  list: PropTypes.object.isRequired,
};
export default RowsOfTable;
