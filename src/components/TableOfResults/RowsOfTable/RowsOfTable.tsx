import React from 'react';
import styles from './RowsOfTable.module.css';
import { useSelector } from 'react-redux';
import { selectIds, selectList } from '../../../selectors';

export const RowsOfTable: React.FC = () => {
  const ids = useSelector(selectIds);
  const list = useSelector(selectList);

  return (
    <>
      {ids && list
        ? ids.map((id) => {
            return (
              <tr key={id}>
                <td className={styles.cell}>{list[id]['full_name']}</td>
                <td className={styles.cell}>{list[id].owner.login}</td>
                <td className={styles.cell}>{list[id]['html_url']}</td>
                <td className={styles.cell}>{list[id]['stargazers_count']}</td>
              </tr>
            );
          })
        : null}
    </>
  );
};
