import React from 'react';
import './TableOfResult.css';
import PropTypes from 'prop-types';
import RowsOfTable from './RowsOfTable';
const TableOfResult = ({ ids, list }) => {
  return (
    <table className="main-content__table table">
      <tbody>
        <tr className="table__row">
          <th className="table__cell">Полное название репозитория</th>
          <th className="table__cell">Владелец</th>
          <th className="table__cell">Ссылка на репозиторий форка</th>
          <th className="table__cell">Кол-во звезд</th>
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
