import React, { Component } from 'react';
import '../NavBar.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {
	render() {
		return (
			<div className="Nav">
				<ul>
        <h1>fridge poetry</h1>
					<li>
						<Link to="/list">poems</Link>
					</li>
					<li>
						<Link to="/">home</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default NavBar;
