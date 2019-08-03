import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";

class LoggedInUser extends Component {

	// function for logout
  handleLogout = (e) => {
		window.localStorage.clear();
		this.props.history.push("/login");
  };

	render() {
		const user = this.props.user || null;
		return (
			<Link to="/user-profile">
				<div className="isUserProfile">
	        {
	          user ? 
	            <div className="isUserData">
	              { 
	                user.user && user.user.photo ? 
	                  <img  className="avatar"  src={user.photo} alt='profile-img' /> 
	                :
	                <div className="avatar">
	                  <span>{user ? user.username.slice(0,1).toUpperCase() : "" }</span>
	                </div>
								}
								{/* <div className="isLoggedUser"> */}
									<p className="isUserName capitalize">{user ? user.username : ""}</p>
								{/* </div> */}
	            </div> 
	          : null
	        }
					<a className="logout-btn" href="/" onClick={this.handleLogout}> Logout </a>
	      </div>
      </Link>
		);
	}
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
  };
}

export default withRouter(connect(mapStateToProps)(LoggedInUser));

