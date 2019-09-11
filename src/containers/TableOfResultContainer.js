import { connect } from 'react-redux'
import TableOfResult from '../components/TableOfResult'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
  const ids = state.MainReducer.ids
  const list = state.MainReducer.list
  return {
    ids,
    list,
  }
}

const TableOfResultContainer = withRouter(
  connect(mapStateToProps)(TableOfResult)
)

export default TableOfResultContainer
