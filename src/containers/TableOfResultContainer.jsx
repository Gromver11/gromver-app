import { connect } from 'react-redux';
import TableOfResult from '../components/TableOfResult';
import React from 'react';
import Paginate from '../components/Paginate';
import { fetchForks } from '../actions/index';
import PropTypes from 'prop-types';

class TableOfResultContainer extends React.Component {
  static propTypes = {
    loadPage: PropTypes.func.isRequired,
    ids: PropTypes.array,
    list: PropTypes.object,
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number,
    currentRep: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.bool,
  };
  componentDidMount() {
    const { currentRep, currentPage } = this.props;
    this.props.fetchForks(currentRep, currentPage);
  }
  componentDidUpdate(PrevProps) {
    if (this.props.currentRep !== PrevProps.currentRep) {
      this.props.fetchForks(this.props.currentRep);
    }
  }
  handleLoadNextPageClick = () => {
    const nextPage = this.props.currentPage + 1;
    const { currentRep } = this.props;
    this.props.loadPage(currentRep, nextPage);
    this.props.history.push(
      `/seacrh&page=${nextPage}?repository=${currentRep}`
    );
  };
  handleLoadPrevPageClick = () => {
    const prevPage = this.props.currentPage - 1;
    const { currentRep } = this.props;
    this.props.loadPage(currentRep, prevPage);
    this.props.history.push(
      `/seacrh&page=${prevPage}?repository=${currentRep}`
    );
  };
  render() {
    console.log(this.props)
    const {
      ids,
      list,
      currentPage,
      totalPages,
      isFetching,
      error,
    } = this.props;
    if (ids.length === 0 && !isFetching && !error) {
      return <div>Форков репозитория не найдено</div>;
    }
    if (isFetching) {
      return <div>loading...</div>;
    }
    if (error) {
      return <div>Ошибка!</div>;
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
    );
  }
}
const mapStateToProps = (state, OwnProps) => {
  const { ids, list, totalPages, isFetching, error } = state.mainReducer;
  const currentRep = OwnProps.location.search.slice(12);
  const currentPage = Number(OwnProps.match.params.info.slice(12));
  return {
    ids,
    list,
    currentPage,
    totalPages,
    currentRep,
    isFetching,
    error,
  };
};

export default connect(
  mapStateToProps,
  { fetchForks }
)(TableOfResultContainer);
