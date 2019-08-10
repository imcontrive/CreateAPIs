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
				<div class="isLoginWrapper">
					<div class="grid">
						<form class="form login">
							<div class="form__field">
								<label for="email">
									<svg class="icon">
										<span class="hidden">Email</span>
									</svg>
								</label>
								<input id="login__username" type="text" class="form__input" placeholder="Email" onChange={this.handleChange} name='email' type="email"  value={ this.state.user.email}  required />
							</div>

							<div class="form__field">
								<label for="password">
									<svg class="icon">
										<span class="hidden">Password</span>
									</svg>
								</label>
								<input id="login__password" type="password" name="password" class="form__input" placeholder="Password" name='password' onChange={this.handleChange} type="password" value={ this.state.user.password } required />
							</div>

							<div class="form__field">
								<input type="submit" value="Sign In" onClick={this.handleLogin}/>
							</div>
						</form>
						<p class="text--center rg-link">Don't have an account?<Link to="/register" className="link-sn">Sign up now</Link></p>
				</div>
			</div>
		);
	}
}
function mapStateToProps (state) {
	return { state }
}
export default connect(mapStateToProps)(Login);