import React, { Component } from 'react';
import '../NavBar.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {
	render() {
		return (
			<div className="Nav">
				<ul>
        <h1><Link className="logo" to="/">mag.NET</Link></h1>
					<li>
						<Link to="/list">POEMS</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default NavBar;
