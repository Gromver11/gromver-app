import { dataFetch } from '../actions/index'
import { connect } from 'react-redux'
import Form from '../components/Form'
import { withRouter } from 'react-router-dom'

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(dataFetch(url)),
  }
}
const FormContainer = withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Form)
)
export default FormContainer
