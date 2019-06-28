import React, { Component } from 'react';
// import { Link} from "react-router-dom";

import setAuthToken from '../utils/setAuthToken';
import { connect } from 'react-redux';
const axios = require('axios');

class CodeSnippets extends Component {

  componentDidMount(){
		const { jwt } = localStorage;
    setAuthToken(jwt)
    axios.get('/snippets')
    .then((res) => {
      if(res.data.success){
        console.log(res.data.questions[0].questions,"checkpoint !!!!!!!")
				var spread = res.data.questions[0].questions.map((quest, id) => {
					return {...quest, isClicked: false}
        })
        console.log("check point @@@@@ ",spread);
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
        code snippets......
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return { snippetQuestions:state.snippetQuestion };
}
export default connect(mapStateToProps)(CodeSnippets);