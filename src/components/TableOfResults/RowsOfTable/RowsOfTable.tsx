import React from 'react';
import styles from './RowsOfTable.module.css';
import { useSelector } from 'react-redux';
import { selectIds, selectForks } from '../../../utils';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export const RowsOfTable: React.FC = () => {
  const ids = useSelector(selectIds);
  const forks = useSelector(selectForks);

  return (
    <TableBody>
      {ids && forks
        ? ids.map((id) => {
            return (
              <TableRow key={id}>
                <TableCell className={styles.cell}>
                  {forks[id]['full_name']}
                </TableCell>
                <TableCell>{forks[id].owner.login}</TableCell>
                <TableCell>{forks[id]['html_url']}</TableCell>
                <TableCell>{forks[id]['stargazers_count']}</TableCell>
              </TableRow>
            );
          })
        : null}
    </TableBody>
  );
};
