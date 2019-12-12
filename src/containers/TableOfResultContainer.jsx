import { connect } from 'react-redux';
import TableOfResult from '../components/TableOfResult';
import React, { useEffect } from 'react';
import Paginate from '../components/Paginate';
import { fetchForks } from '../actions/index';
import PropTypes from 'prop-types';

const TableOfResultContainer = ({
  ids,
  list,
  currentPage,
  totalPages,
  isFetching,
  error,
  currentRep,
  fetchForks,
  history,
}) => {
  useEffect(() => {
    fetchForks(currentRep, currentPage);
  }, [currentRep, currentPage, fetchForks]);

  const handleLoadNextPageClick = () => {
    const nextPage = currentPage + 1;
    history.push(`/seacrh&page=${nextPage}?repository=${currentRep}`);
  };
  const handleLoadPrevPageClick = () => {
    const prevPage = currentPage - 1;
    history.push(`/seacrh&page=${prevPage}?repository=${currentRep}`);
  };
  if (ids.length === 0 && !isFetching && !error) {
    return <div>Форков репозитория не найдено</div>;
  }
  if (isFetching) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>Данного репозитория не существует</div>;
  }
  return (
    <>
      <TableOfResult ids={ids} list={list} />
      <Paginate
        currentPage={currentPage}
        onLoadPrevPage={handleLoadPrevPageClick}
        onLoadNextPage={handleLoadNextPageClick}
        totalPages={totalPages}
      />
    </>
  );
};
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
TableOfResultContainer.propTypes = {
  fetchForks: PropTypes.func.isRequired,
  ids: PropTypes.array,
  list: PropTypes.object,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number,
  currentRep: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.bool,
};

export default connect(
  mapStateToProps,
  { fetchForks }
)(TableOfResultContainer);
