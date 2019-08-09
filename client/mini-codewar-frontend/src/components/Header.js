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
      <div className="header">
        <div className="header-main">
          <div>
            <NavLink to="/" className="nav">
			  	    <img className="logo" src="icon.png" alt="logo" />
			      </NavLink >
          </div>
          {
			    	user.isAuthInProgress ?
							<div className="control-btns">
								<NavLink  to="/login"    className="btn" type="submit">Login</NavLink >
								<NavLink  to="/register" className="btn" type="submit">Sign-Up</NavLink >
							</div>
						: <>
            <div className="header-list">
              <ul>
                <li className="list-items">
                  <NavLink  to="/quiz" activeClassName = 'active'>Quiz</NavLink>
                </li>
                <li className="list-items">
                  <NavLink  to="/snippets" activeClassName = 'active'>Snippets</NavLink>
                </li>
                <li className="list-items">
                <NavLink  to="/editor" activeClassName = 'active'>Editor</NavLink>
                </li>
                <li className="list-items">
                <a  href="https://blog4all.netlify.com" activeClassName = 'active'>Blog</a>
                </li>
                <li className="list-items">
                <NavLink  to="/leaderBoard" activeClassName = 'active'>DashBoard</NavLink>
                </li>
              </ul>
            </div>
              <div className="isUserExist">
              <LoggedInUser/>
              <a className="logout-btn" href="/" onClick={this.handleLogout}> Logout </a>
            </div>
         </>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(Header));