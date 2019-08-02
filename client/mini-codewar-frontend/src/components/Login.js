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
			/* <div className='isLoginWrapper'>
				<form className='login'>
				  <h2>Login</h2>
				  <input onChange={this.handleChange} name='email' placeholder='E-Mail Address' type='text' value={ this.state.user.email } required/>
				  <input onChange={this.handleChange} id='pw' name='password' placeholder='Password' type='password' value={ this.state.user.password } required/>
				  <button type="button" classNameName="btn btn-info" onClick={this.handleLogin}>Login</button>
				</form>

			  <div className="login-flex">
			  	<p className='forgot'>Don't have an account?</p>
			  	<Link to="/register">Register</Link>
			  </div>
			</div> */ 
			<div  className="page-wrapper">
				<div  className="text-center">
					<img  alt="" src="http://www.cakecounter.com/img/swagatam.png"/>	
				</div>
				<div  className="card mt-4">
					<div  className="card-body">
						<div className="text-center">
						<h4>LOGIN</h4>
						<h6>Enter your Email and Password </h6>
					</div>
						{/* Form Data */}
						<form className="theme-form ng-untouched ng-pristine ng-valid">
							<div className="form-group">
								<label  className="col-form-label pt-0">Email</label>
								<input  className="form-control ng-untouched ng-pristine ng-valid" formcontrolname="email" onChange={this.handleChange} name='email' type="email"  value={ this.state.user.email }required/>
							</div>
							<div className="form-group">
								<label  className="col-form-label">Password</label>
								<input  className="form-control ng-untouched ng-pristine ng-valid" formcontrolname="password"  name='password' onChange={this.handleChange} type="password" value={ this.state.user.password }required/>
							</div>
							<div  className="checkbox p-0">
								<input  id="checkbox1" type="checkbox"/>
								<label  for="checkbox1">Remember me</label>
							</div>
							<div  className="form-group form-row mt-3 mb-0">
								<button  className="btn btn-primary btn-block btn-lg" type="submit" onClick={this.handleLogin}><span>Login</span></button>
								<div className="notExist">
									<p className='forgot'>Don't have an account?</p>
									<Link to="/register">Register</Link>
								</div>
							</div>
							<div  className="login-divider">
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps (state) {
	return { state }
}

export default connect(mapStateToProps)(Login);