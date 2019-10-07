import { dataFetch } from '../actions/index'
import { connect } from 'react-redux'
import UserForm from '../components/UserForm'
import { withRouter } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'

class FormContainer extends React.Component {
  static propTypes = {
    fetchData: PropTypes.func.isRequired,
  }
  handleSubmit = values => {
    this.props.history.push(`/seacrh&page=1?repository=${values.userInput}`)
  }

  render() {
    return (
      <>
        <h1>Приветствую Вас! Заполните поле ввода</h1>
        <UserForm onSubmit={this.handleSubmit} />
      </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(dataFetch(url)),
  }
}
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(FormContainer)
)
