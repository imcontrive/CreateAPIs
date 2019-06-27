import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
const axios = require('axios');

class Login extends Component {
	
	state ={
    user: {}
  }

  handleChange = (e) => {
		const { name, value } = e.target;
  	this.setState({
		 user: {
				...this.state.user,
				[name]: value 
			} 
		});
  }

  handleLogin = (e) => {
  	console.log("login fn()");
  	e.preventDefault();

  	axios.post('/users/login', this.state.user)
	  .then((res) => {
	    console.log(res.data, "data");
	    if(res.data.success){
  			localStorage.setItem("jwt", res.data.token);
  			this.props.dispatch({ type: "REGISTER_USER", payload: res.data });
  			this.setState({ user: {} });
  			this.props.history.push('/');
  		}
	  })
	  .catch(function (error) {
	    console.log(error, "catch error");
	  });
  }

	render() {
		return (
			<div className='login'>
				<div className="hero" style={{ width:"100%",height:"600px",backgroundSize:"100% 100%",backgroundImage: "url(" + "/media/raw.jpg" + ")"}}>
					<h3 style={{bottom:"-135px",left: "276.5px",textAlign: "center",fontWeight: "800",fontStyle: "italic",textDecoration: "none",fontFamily: "Lato",fontSize: "50px",color: "rgb(255, 255, 255)",margin: "0px",zIndex: "auto",width: "798px",height: "240px",padding: "0px",borderWidth: "0px",borderRadius: "0px",letterSpacing:"0px",position:"relative"}}>Alternative to Codewars <small style={{display:"block", fontSize:"20px"}}>Anyone Can Practice and Perfect their Programming Skills.</small></h3>
				</div>
				<form>
				  <h2>Login</h2>
				  <input onChange={this.handleChange} name='email' placeholder='E-Mail Address' type='text' value={ this.state.user.email } required/>
				  <input onChange={this.handleChange} id='pw' name='password' placeholder='Password' type='password' value={ this.state.user.password } required/>
				  <button type="button" className="btn btn-info" onClick={this.handleLogin}>Login</button>
				</form>

			  <div className="login-flex">
			  	<p className='forgot'>Don't have an account?</p>
			  	<Link to="/register">Register</Link>
			  </div>
			</div>
		);
	}
}

function mapStateToProps (state) {
	return { state }
}

export default connect(mapStateToProps)(Login);