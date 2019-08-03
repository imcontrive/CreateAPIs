import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";

class LoggedInUser extends Component {

	render() {
		const user = this.props.user || null;
		return (
			<Link to="/user-profile">
				<div className="isUserProfile">
	        {
	          user ? 
	            <div>
	              { 
	                user.user && user.user.photo ? 
	                  <img  className="avatar"  src={user.photo} alt='profile-img' /> 
	                :
	                <div className="avatar">
	                  <span>{user ? user.username.slice(0,1).toUpperCase() : "" }</span>
	                </div>
	              }
							  <p className="user-info" style={{textTransform:'capitalize', color:"#002e43"}}>{user ? user.username : ""}</p>
	            </div> 
	          : null
	        }
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

