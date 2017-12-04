import React, { Component } from 'react';
import '../NavBar.css';
import { Link } from 'react-router-dom';
import magnet from '../magnet.svg'
import touchscreen from '../touchscreen.svg'

class NavBar extends Component {
	render() {
		return (
			<div className="Nav">
				<ul>
        <h1><Link className="logo" to="/playground">mag.NET</Link><img src={touchscreen} className="touch-icon" alt=""/></h1>
					<li>
						<Link to="/list">POEMS</Link>
					</li>
					<li>
						<img src={magnet} className="magnet-icon" alt=""/>
					</li>
				</ul>
			</div>
		);
	}
}

export default NavBar;
