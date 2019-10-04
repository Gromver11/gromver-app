import { connect } from 'react-redux'
import TableOfResult from '../components/TableOfResult'
import { withRouter } from 'react-router-dom'
import React from 'react'
import Paginate from '../components/Paginate'
import { dataFetch } from '../actions/index'

class TableOfResultContainer extends React.Component {
  componentDidMount() {
    const { currentRep, currentPage } = this.props
    this.props.loadPage(currentRep, currentPage)
  }
  handleLoadNextPageClick = () => {
    const nextPage = this.props.currentPage + 1
    const { currentRep } = this.props
    this.props.loadPage(currentRep, nextPage)
    this.props.history.push(`/seacrh&page=${nextPage}?repository=${currentRep}`)
  }
  handleLoadPrevPageClick = () => {
    const prevPage = this.props.currentPage - 1
    const { currentRep } = this.props
    this.props.loadPage(currentRep, prevPage)
    this.props.history.push(`/seacrh&page=${prevPage}?repository=${currentRep}`)
  }
  render() {
    const { ids, list, currentPage, totalPages, isFetching } = this.props
    if (ids.length === 0 && !isFetching) {
      return <div>Форков репозитория не найдено</div>
    }
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
const mapStateToProps = (state, OwnProps) => {
  const { ids, list, totalPages, isFetching } = state.MainReducer
  const currentRep = OwnProps.location.search.slice(12)
  const currentPage = Number(OwnProps.match.params.info.slice(12))
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
