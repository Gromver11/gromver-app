import React from 'react'
import './Form.css'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }
  handleChange = e => {
    e.preventDefault()
    const value = e.target.value
    this.setState({
      value,
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.fetchData(this.state.value)
    this.props.history.push(`/seacrh&page=1?repository=${this.state.value}`)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="user-form">
        <input
          onChange={this.handleChange}
          required
          value={this.state.value}
          type="text"
          placeholder="Введите ваш запрос"
          className="user-form__input"
        />
        <button type="submit" className="user-form__btn">
          Искать
        </button>
      </form>
    )
  }
}

export default Form
