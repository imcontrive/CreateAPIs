import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import LeaderBoard from './components/LeaderBoard';
import QuizBoard from './components/QuizBoard';
import PrivateRoute from './components/PrivateRoute';
import setAuthToken from './utils/setAuthToken';
import UserProfile from './components/UserProfile';
import SingleQuestion from './components/SingleQuestion';
import CodeMirror from './components/CodeMirror';
import CodeSnippets from './components/CodeSnippets';


const axios = require('axios');
class App extends Component {
  
  componentDidMount() {
    const { jwt } = localStorage;
    if(jwt){
      setAuthToken(jwt)
      axios.get('/users/me')
      .then(res => {
        if(res.data.success){
          this.props.dispatch({ type: "REGISTER_USER", payload: res.data });
          // this.props.history.push('/');
        }
      })
      .catch(function (error) {
        console.error(error, "catch error");
      });
     } /*else this.props.history.push('/login');*/
  }
  
  render() {
    // const isAuthenticated = this.props.state.user.isAuthenticated;

    return (
      <div className="App">
      	<Header />
        <Switch>
		      <Route exact path="/" component={Home} />
		      <Route path="/register" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/quiz/question" component={SingleQuestion} />
          {/* <Route path="/code" component={CodeMirror} /> */}


          {
            // <>
            // <Route path="/user-profile" component={UserProfile} />
            //   <Route path="/leaderBoard" component={LeaderBoard} />
            //   <Route path="/quiz" component={QuizBoard} />
            // </>
          }
          {
            <>
              <PrivateRoute path="/user-profile" auth={this.props.user.isAuthenticated} component={UserProfile} />
              <PrivateRoute path='/snippets' auth={this.props.user.isAuthenticated} component={CodeSnippets} />
              <PrivateRoute path='/editor' auth={this.props.user.isAuthenticated} component={CodeMirror} />

              <PrivateRoute path='/leaderBoard' auth={this.props.user.isAuthenticated} component={LeaderBoard} />
              <PrivateRoute path='/quiz' auth={this.props.user.isAuthenticated} component={QuizBoard} />
            </>
          }
	      </Switch>
      </div>
    );
  }
}

function mapStateToProps (state) {
	return { 
    state,
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps)(App));
