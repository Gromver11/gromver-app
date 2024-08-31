import React from "react";
import styles from "./TableOfResults.module.css";
import { RowsOfTable } from "./RowsOfTable/RowsOfTable";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchForks } from "../../actions/index";
import {
  selectIsErrorState,
  selectIsLoadingState,
  selectIds,
} from "../../utils";
import type { History, Location } from "history";
import type { match as Match } from "react-router-dom";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
    return (
      <div className={styles.wrap}>
        <Alert variant="filled" severity="warning">
          Форков данного репозитория не найдено
        </Alert>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className={styles.wrap}>
        <CircularProgress color="primary" />
      </div>
    );
  }
  if (isError) {
    return (
      <div className={styles.wrap}>
        <Alert variant="filled" severity="error">
          Не удалось получить список результатов
        </Alert>
      </div>
    );
  }

  return (
    <div className={styles.tableWrap}>
      <TableContainer component={Paper}>
        <Table className={styles.table} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={styles.caption}>
                Полное название репозитория
              </TableCell>
              <TableCell className={styles.caption}>Владелец</TableCell>
              <TableCell className={styles.caption}>
                Ссылка на репозиторий форка
              </TableCell>
              <TableCell className={styles.caption}>Кол-во звезд</TableCell>
            </TableRow>
          </TableHead>
          <RowsOfTable />
        </Table>
      </TableContainer>
    </div>
  );
};
