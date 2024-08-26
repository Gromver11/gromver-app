import React from 'react';
import styles from './RowsOfTable.module.css';
import { useSelector } from 'react-redux';
import { selectIds, selectList } from '../../../selectors';


   export const RowsOfTable = () => {

    const ids = useSelector(selectIds);
    const list = useSelector(selectList);

    return <>{ ids && list && ids.map(el=> {
    return (
      <tr key={list[el].id}>
      <td className={styles.cell}>{list[el]['full_name']}</td>
      <td className={styles.cell}>{list[el].owner.login}</td>
      <td className={styles.cell}>{list[el]['html_url']}</td>
      <td className={styles.cell}>{list[el]['stargazers_count']}</td>
    </tr>
  )})}</>
};
