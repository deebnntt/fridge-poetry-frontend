import React from 'react';
import MagnetDiv from './MagnetDiv.js'
import { connect } from 'react-redux';

class PoemShow extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {

		return(
			<div>
				{this.props.id}
			</div>
		)
  }

}

export default PoemShow
