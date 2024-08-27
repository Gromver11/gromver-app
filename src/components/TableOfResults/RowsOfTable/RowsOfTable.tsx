import React from 'react';
import styles from './RowsOfTable.module.css';
import { useSelector } from 'react-redux';
import { selectIds, selectForks } from '../../../utils';

export const RowsOfTable: React.FC = () => {
  const ids = useSelector(selectIds);
  const forks = useSelector(selectForks);

  return (
    <>
      {ids && forks
        ? ids.map((id) => {
            return (
              <tr key={id}>
                <td className={styles.cell}>{forks[id]['full_name']}</td>
                <td className={styles.cell}>{forks[id].owner.login}</td>
                <td className={styles.cell}>{forks[id]['html_url']}</td>
                <td className={styles.cell}>{forks[id]['stargazers_count']}</td>
              </tr>
            );
          })
        : null}
    </>
  );
};
