import React from 'react'
import './Paginate.css'
import PropTypes from 'prop-types'
const Paginate = props => {
  if (props.currentPage === 1 && props.totalPages === null) {
    return (
      <div className="paginate__wrapper">
        <span className="paginate__count">
          {props.currentPage} из {props.currentPage}
        </span>
      </div>
    )
  }
  return (
    <div className="paginate__wrapper">
      {props.currentPage !== 1 && (
        <button className="btn paginate__btn" onClick={props.onLoadPrevPage}>
          {'<<'}
        </button>
      )}
      <span className="paginate__count">
        {props.currentPage} of {props.totalPages}
      </span>
      {props.currentPage !== props.totalPages && (
        <button className="btn paginate__btn" onClick={props.onLoadNextPage}>
          {'>>'}
        </button>
      )}
    </div>
  )
}
Paginate.propTypes = {
  currentPage: PropTypes.number.isRequired,
  onLoadNextPage: PropTypes.func.isRequired,
  onLoadPrevPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired

}

export default Paginate
