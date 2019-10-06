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
  componentDidUpdate(PrevProps) {
    if (this.props.currentRep !== PrevProps.currentRep) {
      this.props.loadPage(this.props.currentRep)
    }
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
    const { ids, list, currentPage, totalPages, isFetching, error } = this.props
    if (ids.length === 0 && !isFetching && !error) {
      return <div>Форков репозитория не найдено</div>
    }
    if (isFetching) {
      return <div>loading...</div>
    }
    if (error) {
      return <div>Ошибка!</div>
    }
    return (
      <>
        <TableOfResult ids={ids} list={list} />
        <Paginate
          currentPage={currentPage}
          onLoadPrevPage={this.handleLoadPrevPageClick}
          onLoadNextPage={this.handleLoadNextPageClick}
          totalPages={totalPages}
        />
      </>
    )
  }
}
const mapStateToProps = (state, OwnProps) => {
  const { ids, list, totalPages, isFetching, error } = state.MainReducer
  const currentRep = OwnProps.location.search.slice(12)
  const currentPage = Number(OwnProps.match.params.info.slice(12))
  return {
    ids,
    list,
    currentPage,
    totalPages,
    currentRep,
    isFetching,
    error,
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
