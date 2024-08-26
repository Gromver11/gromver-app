import React from 'react';
import styles from './RowsOfTable.module.css';
import { State } from '../../../../typings';


type RowsOfTableProps = {
  ids: State['ids']
  list: NonNullable<State['list']>
}

   export const RowsOfTable:React.FC<RowsOfTableProps> = ({ids, list}) => {

    return <>{ids.map(el=> {
    return (
      <tr key={list[el].id}>
      <td className={styles.cell}>{list[el]['full_name']}</td>
      <td className={styles.cell}>{list[el].owner.login}</td>
      <td className={styles.cell}>{list[el]['html_url']}</td>
      <td className={styles.cell}>{list[el]['stargazers_count']}</td>
    </tr>
  )})}</>
};
