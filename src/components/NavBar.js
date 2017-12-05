import React, { Component } from 'react'
import '../NavBar.css';
import { Link } from 'react-router-dom'
import magnet from '../magnet.svg'
import touchscreen from '../touchscreen.svg'
import { logoutUser } from '../actions/users'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class NavBar extends Component {

	handleLogout = (event) => {
		event.preventDefault
		localStorage.removeItem('jwtToken')
		this.props.logoutUser()
	}

	render() {
		return (
			<div className="Nav">
				<ul>
        <h1><Link className="logo" to="/playground">mag.NET</Link><img src={touchscreen} className="touch-icon" alt=""/></h1>
					<li>
						<Link to="/list">POEMS</Link>
					</li>
					<li onClick={this.handleLogout}>LOGOUT</li>
					<li>
						<img src={magnet} className="magnet-icon" alt=""/>
					</li>
				</ul>
			</div>
		);
	}
}

const mapStateToProps= (state) => {
  return {
    currentUser: state.user.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logoutUser
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(NavBar)
