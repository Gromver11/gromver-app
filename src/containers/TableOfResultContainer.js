import { connect } from 'react-redux'
import TableOfResult from '../components/TableOfResult'

const mapStateToProps = state => {
  return {
    list: state.MainReducer.list,
  }
}

const TableOfResultContainer = connect(mapStateToProps)(TableOfResult)

export default TableOfResultContainer
