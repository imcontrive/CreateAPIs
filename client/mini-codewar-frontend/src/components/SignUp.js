import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
const axios = require('axios');

class SignUp extends Component {

	state = {
		user: {
			username: "",
			password: "",
			email: "",
			terms: false,
			confirmPassword: ""
		}
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		if(name === "terms"){
			this.setState({ 
				user: {
					...this.state.user,
					[name]: !this.state.user[name]
				}
			})
		}else {
			this.setState({
			 user: {
					...this.state.user,
					[name]: value 
				} 
			});
		}
	}

	handleRegister = (e) => {
		e.preventDefault();
		axios.post('/users/register', this.state.user)
	  .then((res) => {
	    console.log(res, "data");
	    if(res.data.success){
  			this.props.dispatch({ type: "REGISTER_USER", payload: res.data });
  			this.setState({ user: {} });
  			this.props.history.push('/login');
  		}
	  })
	  .catch(function (error) {
	    console.log(error, "exios fetch error!");
	  });
	}

	render() {
		return (
			// <div className='login'>
			// 	<form>
			// 	  <h2>Register</h2>
			// 	  <input onChange={this.handleChange} name='username' placeholder='Username' type='text' value={ this.state.user.username } required/>
			// 	  <input onChange={this.handleChange} id='pw' name='password' placeholder='Password' type='password' value={ this.state.user.password } required/>
			// 	  <input onChange={this.handleChange} name='confirmPassword' placeholder='Confirm password' type='password' value={ this.state.user.confirmPassword} required/>
			// 	  <input onChange={this.handleChange} name='email' placeholder='E-Mail Address' type='text' value={ this.state.user.email } required/>
			// 	  <div className='agree'>
			// 	    <input id='agree' name='terms' type='checkbox' checked={ this.state.user.terms } onChange={this.handleChange} required/>
			// 	    <label htmlFor='agree'></label>Accept rules and conditions
			// 	  </div>
			// 	  <input className='animated' type='submit' value='Register' onClick={this.handleRegister}/>
			// 	  </form>
			// 	  <div className="login-flex">
			// 	  	<p className='forgot'>Already have an account?</p>
			//   		<Link to="/login"><strong>Login</strong></Link>
			// 	  </div>
			// </div>
			<div class="isLoginWrapper">
					<div class="grid">
					<h2 className="text-center">Register</h2>
						<form class="form login">
							<div class="form__field">
								<label for="email">
									<svg class="icon">
										<span class="hidden">Email</span>
									</svg>
								</label>
								<input id="login__username" type="text" class="form__input" onChange={this.handleChange} name='username' placeholder='Username' type='text' value={ this.state.user.username }   required />
							</div>
							<div class="form__field">
								<label for="email">
									<svg class="icon">
										<span class="hidden">Email</span>
									</svg>
								</label>
								<input id="login__username" type="text" class="form__input" onChange={this.handleChange} name='email' placeholder='E-Mail' type='text' value={ this.state.user.email } required />
							</div>
							<div class="form__field">
								<label for="password">
									<svg class="icon">
										<span class="hidden">Confirm Password</span>
									</svg>
								</label>
								<input id="login__password" type="password" name="password" class="form__input" placeholder="Password" name='password' onChange={this.handleChange} type="password" value={ this.state.user.password } required />
							</div>
							<div class="form__field">
								<label for="email">
									<svg class="icon">
										<span class="hidden">Email</span>
									</svg>
								</label>
								<input id="login__username" onChange={this.handleChange} name='confirmPassword' placeholder='Confirm password' type='password' value={ this.state.user.confirmPassword}  required />
							</div>

							<div class="form__field">
								<input type="submit" value="Register" onClick={this.handleRegister}/>
							</div>
						</form>
						<p class="text--center rg-link">Already have an account?<Link to="/login" className="link-sn">Login now</Link></p>
				</div>
			</div>
		);
	}
}

function mapStateToProps (state) {
	return { state }
}

export default connect(mapStateToProps)(SignUp);
