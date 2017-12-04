import React from 'react'

class TitleForm extends React.Component {

  constructor(props) {
    super(props)
      this.state = {
        input: ''
      }
  }

  componentDidMount() {

	}

  handleInputChange = (event) => {
		this.setState({
			input: event.target.value
		});
	};

  handleSubmit = (event) => {
    event.preventDefault()
    const input = this.state.input
    this.props.handleSubmit(input)
    this.setState({
      input: ''
    });
  }

  render() {
    return (
        <div className="title-form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" className="input-text" placeholder="edit title" value={this.state.input} onChange={this.handleInputChange}/><br/>
            <input className="button-small" value="submit" type="submit"/>
          </form>
        </div>
    )
  }
}

export default TitleForm
