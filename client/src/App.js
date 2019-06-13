import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import setAuthToken from './utils/setAuthToken';
import Question from './components/Question';

class App extends React.Component {
  state = {
    email: "xyz@g.com",
    password: "qwerty",
    isLogin : false,
    QuestionData : []
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // fetch('users/login', {
    //   method: "POST",
    //   body: JSON.stringify(this.state)
    // }).then(res => res.json()).then(data => console.log(data))
    axios.post('/api/v1/users/login',this.state).then(({data: { token, success}}) => {
      if(success){
        setAuthToken(token);
        localStorage.setItem('quizToken', token);
      }
    });
    axios.get('/api/v1/questions').then(data => {
      console.log("checkdata", data);
      // this.setState({isLogin: !this.state.isLogin});
    });
  }
  handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value})
  }
  render(){
    const {email, password} = this.state;
    return (
      <>
      {
        this.state.isLogin ? <Question /> 
        : (
        <div className="App">
          <input type="text" name="email" onChange={this.handleChange} value={email} />
          <input type="password" name="password" onChange={this.handleChange} value={password}/>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
       )
      }
      </>
    );
  }
  
}

export default App;
