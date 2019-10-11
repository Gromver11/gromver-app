import { dataFetch } from '../actions/index'
import { connect } from 'react-redux'
import UserForm from '../components/UserForm'
import React from 'react'
import PropTypes from 'prop-types'

class FormContainer extends React.Component {
  static propTypes = {
    fetchData: PropTypes.func.isRequired,
    currentRep: PropTypes.string.isRequired,
  }
  handleSubmit = values => {
    this.props.history.push(`/seacrh&page=1?repository=${values.userInput}`)
  }
  getInitialValues = () => {
    return {
      userInput: this.props.currentRep,
    }
  }
  render() {
    return (
      <>
        <h1>Приветствую Вас! Заполните поле ввода</h1>
        <UserForm
          onSubmit={this.handleSubmit}
          initialValues={this.getInitialValues()}
        />
      </>
    )
  }
}

const mapStateToProps = (state, OwnProps) => {
  const currentRep = OwnProps.location.search.slice(12)
  return {
    currentRep,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(dataFetch(url)),
  }
}
export default 
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FormContainer)

