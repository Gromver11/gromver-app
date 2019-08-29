import { dataFetch } from '../actions/index'
import { connect } from 'react-redux'
import Form from '../components/Form'

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(dataFetch(url)),
  }
}
const FormContainer = connect(
  null,
  mapDispatchToProps
)(Form)
export default FormContainer
