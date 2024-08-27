import React from 'react';
import styles from './TableOfResults.module.css';
import { RowsOfTable } from './RowsOfTable/RowsOfTable';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchForks } from '../../actions/index';
import {
  selectIsErrorState,
  selectIsLoadingState,
  selectIds,
} from '../../utils';
import type { History, Location } from 'history';
import type { match as Match } from 'react-router-dom';

type TableOfResultsProps = {
  location: Location;
  history: History;
  match: Match<{ info: string }>;
};

export const TableOfResults: React.FC<TableOfResultsProps> = ({
  location,
  match,
}) => {
  const currentRepository = location.search.slice(12);

  const dispatch = useDispatch();

  const currentPage = Number(match.params.info.slice(12));

  const isLoading = useSelector(selectIsLoadingState);

  const isError = useSelector(selectIsErrorState);

  const ids = useSelector(selectIds);

  useEffect(() => {
    dispatch(fetchForks(currentRepository, currentPage));
  }, [dispatch, currentRepository, currentPage]);

  if (ids?.length === 0 && !isLoading && !isError) {
    return <div>Форков репозитория не найдено</div>;
  }
  if (isLoading) {
    return (
      <div className={styles.wrap}>
        <div>loading...</div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className={styles.wrap}>
        <div>Данного репозитория не существует</div>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th className={styles.caption}>Полное название репозитория</th>
            <th className={styles.caption}>Владелец</th>
            <th className={styles.caption}>Ссылка на репозиторий форка</th>
            <th className={styles.caption}>Кол-во звезд</th>
          </tr>
          <RowsOfTable />
        </tbody>
      </table>
    </div>
  );
};
