import React, { Component } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import LoggedInUser from "./LoggedInUser";

class Header2 extends Component {
  // function for logout
  handleLogout = (e) => {
		window.localStorage.clear();
		this.props.history.push("/login");
  };
  
  render() {
    const { user } = this.props || null;
    return (
      <>
      <div className="header">
        <div className="header-main">
          <div>
            <NavLink to="/" className="nav">
			  	    <img className="logo" src="icon.png" alt="logo" />
			      </NavLink >
          </div>
          <div className="header-list">
            <ul>
              <li className="list-items">
                Quiz
              </li>
              <li className="list-items">
                Snippets
              </li>
              <li className="list-items">
                Editor
              </li>
              <li className="list-items">
                Leaderboard
              </li>
            </ul>
          </div>
        </div>
        <div>
          Logout
        </div>
      </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(Header2));