import React from 'react'
import './TableOfResult.css'
import PropTypes from 'prop-types'
const TableOfResult = props => {
  const renderRow = () => {
    const { ids, list } = props
    return ids.map(el => (
      <tr className="table__row" key={list[el].id}>
        <td className="table_cell">{list[el]['full_name']}</td>
        <td className="table_cell">{list[el].owner.login}</td>
        <td className="table_cell">{list[el]['html_url']}</td>
        <td className="table_cell">{list[el]['stargazers_count']}</td>
      </tr>
    ))
  }
  return (
    <table className="table">
      <tbody>
        <tr className="table__row">
          <th className="table__cell table__cell--caption">
            Полное название репозитория
          </th>
          <th className="table__cell table__cell--caption">Владелец</th>
          <th className="table__cell table__cell--caption">
            Ссылка на репозиторий форка
          </th>
          <th className="table__cell table__cell--caption">Кол-во звезд</th>
        </tr>
        {renderRow()}
      </tbody>
    </table>
  )
}

TableOfResult.propTypes = {
  ids: PropTypes.array.isRequired,
  list: PropTypes.object.isRequired,
}
export default TableOfResult
