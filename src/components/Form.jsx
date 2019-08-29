import React from 'react'

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
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          required
          value={this.state.value}
          type="text"
          placeholder="Введите ваш запрос"
        />
        <button type="submit">Искать</button>
      </form>
    )
  }
}

export default Form
