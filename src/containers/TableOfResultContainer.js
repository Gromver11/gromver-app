import { connect } from 'react-redux'
import TableOfResult from '../components/TableOfResult'
import { withRouter } from 'react-router-dom'
import React from 'react'
import Paginate from '../components/Paginate'
import { dataFetch } from '../actions/index'

class TableOfResultContainer extends React.Component {
  handleLoadNextPageClick = () => {
    const nextPage = this.props.currentPage + 1
    this.props.loadPage(this.props.currentRep, nextPage)
  }
  handleLoadPrevPageClick = () => {
    const prevPage = this.props.currentPage - 1
    this.props.loadPage(this.props.currentRep, prevPage)
  }
  render() {
    const { ids, list, currentPage, totalPages, isFetching } = this.props
    if (isFetching) {
      return <div>loading...</div>
    }
    return (
      <div>
        <TableOfResult ids={ids} list={list} />
        <Paginate
          currentPage={currentPage}
          onLoadPrevPage={this.handleLoadPrevPageClick}
          onLoadNextPage={this.handleLoadNextPageClick}
          totalPages={totalPages}
        />
      </div>
    )
  }
}
const mapStateToProps = state => {
  const {
    ids,
    list,
    currentPage,
    totalPages,
    currentRep,
    isFetching,
  } = state.MainReducer
  return {
    ids,
    list,
    currentPage,
    totalPages,
    currentRep,
    isFetching,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    loadPage: (endpoint, page) => dispatch(dataFetch(endpoint, page)),
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TableOfResultContainer)
)
