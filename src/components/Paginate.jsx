import React from 'react'
const Paginate = props => {
  if (props.currentPage === 1 && props.totalPages === null) {
    return (
      <div>
        {props.currentPage} из {props.currentPage}
      </div>
    )
  }
  return (
    <div>
      {props.currentPage !== 1 && (
        <button onClick={props.onLoadPrevPage}>Назад</button>
      )}
      {props.currentPage} of {props.totalPages}
      {props.currentPage !== props.totalPages && (
        <button onClick={props.onLoadNextPage}>Вперед</button>
      )}
    </div>
  )
}

export default Paginate
