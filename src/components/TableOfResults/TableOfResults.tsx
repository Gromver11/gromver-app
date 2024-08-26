import React from 'react';
import styles from './TableOfResults.module.css';
import {RowsOfTable} from './RowsOfTable/RowsOfTable'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchForks } from '../../actions/index';
import {
  selectIsFetchingState,
  selectError,
  selectIds,
  selectList,
} from '../../selectors';
import type {History, Location}  from 'history'
import type { match as Match } from "react-router-dom";

type TableOfResultsProps = {
  location: Location,
  history: History,
  match : Match<{info: string}>
  children: React.ReactNode
}

export const TableOfResults: React.FC<TableOfResultsProps> = ({ children,  location, match }) => {
  const currentRep = location.search.slice(12);

  const dispatch = useDispatch();

  const currentPage = Number(match.params.info.slice(12));

  const isFetching = useSelector(selectIsFetchingState);

  const error = useSelector(selectError);

  const ids = useSelector(selectIds);

  const list = useSelector(selectList);


  useEffect(() => {
    dispatch(fetchForks(currentRep, currentPage));
  }, [dispatch, currentRep, currentPage]);

  if (ids?.length === 0 && !isFetching && !error) {
    return <div>Форков репозитория не найдено</div>;
  }
  if (isFetching) {
    return (
      <div className={styles.wrap}>
        <div>loading...</div>
      </div>
    );
  }
  if (error) {
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
           { ids && list && <RowsOfTable ids={ids} list={list}/>}
        </tbody>
      </table>
    </div>
  );
};
