import React from 'react'
const TableOfResult = props => {
  return (
    <table className="table">
      <tbody>
        <tr className="table__row">
          <td className="table_cell">Полное название репозитория</td>
          <td className="table__cell">Владелец</td>
          <td className="table_cell">Кол-во звезд</td>
          <td className="table_cell">Ссылка на репозиторий форка</td>
        </tr>
        <tr className="table__row">
          <td className="table_cell">1</td>
          <td className="table__cell">2</td>
          <td className="table_cell">3</td>
          <td className="table_cell">4</td>
        </tr>
      </tbody>
    </table>
  )
}

export default TableOfResult
