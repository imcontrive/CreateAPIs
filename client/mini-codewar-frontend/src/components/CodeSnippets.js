import React, { Component } from 'react';
import { Link} from "react-router-dom";

import setAuthToken from '../utils/setAuthToken';
import { connect } from 'react-redux';
const axios = require('axios');

export default class CodeSnippets extends Component {

  componentDidMount(){
		const { jwt } = localStorage;
    setAuthToken(jwt)
    axios.get('/snippets')
    .then((res) => {
      if(res.data.success){
				var spread = res.data.questions[0].questions.map((quest, id) => {
					return {...quest, isClicked: false}
				})
        this.props.dispatch({ type: "ADD_SNIPPETS", payload: spread });
      }
    })
    .catch(function (error) {
      console.log(error, "catch error in CodeSnippets 1");
    });
  }
  
  render() {
    return (
      <div>
        code snippets
      </div>
    )
  }
}


export default CodeSnippets;