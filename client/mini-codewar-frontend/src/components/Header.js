import React, { Component } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import LoggedInUser from "./LoggedInUser";

class Header extends Component {

	handleLogout = (e) => {
		window.localStorage.clear();
		this.props.history.push("/login");
	};

	render() {
		const { user } = this.props || null;

		return (
			<nav className="navigation">
			  <NavLink to="/" className="nav">
			  	<img className="logo" src="icon.png" alt="logo" />
			  </NavLink >

			  <div>
			    <ul className="isNavBar">
			      <li>
				      <NavLink  to="/quiz" className="isNavLink">Quiz</NavLink >
			      </li>
						<li>
				      <NavLink  to="/snippets" className="isNavLink">Snippets</NavLink >
			      </li>
						<li>
				      <NavLink  to="/editor" className="isNavLink">CodeEditor</NavLink >
			      </li>
			      <li>
				      <NavLink  to="/leaderBoard" className="isNavLink">Leaderboard</NavLink >
				    </li>
			    </ul>
			    {
			    	user.isAuthInProgress ?
							<form className="form">
								<NavLink  to="/login" className="btn" type="submit">Login</NavLink >
								<NavLink  to="/register" className="btn" type="submit">Sign-Up</NavLink >
							</form>
						: 
						<>
							<LoggedInUser/>
							<a className="logout-btn isNavBar" href="/" onClick={this.handleLogout}> Logout </a>
						</>
					}
			  </div>
			</nav>
		);
	}
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(Header));
