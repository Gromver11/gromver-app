import React from 'react';
import PropTypes from 'prop-types';
const RowsOfTable = ({ ids, list }) => {
  return ids.map(el => (
    <tr className="table__row" key={list[el].id}>
      <td className="table_cell">{list[el]['full_name']}</td>
      <td className="table_cell">{list[el].owner.login}</td>
      <td className="table_cell">{list[el]['html_url']}</td>
      <td className="table_cell">{list[el]['stargazers_count']}</td>
    </tr>
  ));
};
RowsOfTable.propTypes = {
  ids: PropTypes.array.isRequired,
  list: PropTypes.object.isRequired,
};
export default RowsOfTable;
