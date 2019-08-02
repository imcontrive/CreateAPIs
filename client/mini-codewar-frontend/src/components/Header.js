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
			<nav className="navbar navbar-expand-lg navbar-light" style={{background: "transparent"}}>
			  <NavLink to="/" className="navbar-brand">
			  	<img className="logo" src="icon.png" alt="logo" />
			  </NavLink >
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>

			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto">
			      <li className="nav-item" >
				      <NavLink  to="/quiz" className="nav-link">Quiz</NavLink >
			      </li>
						<li className="nav-item" >
				      <NavLink  to="/snippets" className="nav-link">Snippets</NavLink >
			      </li>
						<li className="nav-item" >
				      <NavLink  to="/editor" className="nav-link">CodeEditor</NavLink >
			      </li>
			      <li className="nav-item">
				      <NavLink  to="/leaderBoard" className="nav-link">Leaderboard</NavLink >
				    </li>
			    </ul>
			    {
			    	user.isAuthInProgress ?
						    <form className="form-inline my-2 my-lg-0">
						      <NavLink  to="/login" className="hdr-btn btn btn-outline-success my-2 my-sm-0" type="submit">Login</NavLink >
						      <NavLink  to="/register" className="hdr-btn btn btn-outline-success my-2 my-sm-0" type="submit">Sign-Up</NavLink >
						    </form>
						  : 
							<>
								<LoggedInUser/>
							  <a className="hdr-btn btn" href="/" onClick={this.handleLogout} style={{color:"white"}}> Logout </a>
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
