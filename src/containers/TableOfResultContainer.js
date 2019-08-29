import { connect } from 'react-redux'
import TableOfResult from '../components/TableOfResult'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
  return {
    list: state.MainReducer.list,
  }
}

const TableOfResultContainer = withRouter(
  connect(mapStateToProps)(TableOfResult)
)

export default TableOfResultContainer
