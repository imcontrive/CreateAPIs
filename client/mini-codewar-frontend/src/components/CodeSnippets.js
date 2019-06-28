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

    const snippetQues = this.props.snippetQuestions;
    console.log(snippetQues,"this is not a checkPoint");
    return (
      <div>
        {
          !snippetQues ? null: snippetQues.map((ques,i)=> (
            <>
            <p>{ques.question}</p>
            <iframe src={`${ques.iframe}`} />
            <ul>
              {
                	Object.keys(ques.options).map((o, idx) => (
                    <div style={{display: "flex"}} key={idx}>
                      <input type="radio" name={ques._id} onChange = { (e) => this.handleChange(e)} value={o} />
                      <p key={idx}>{o +" :  "+ ques.options[o]}</p>
                    </div>
                  ))
                
              }
            </ul>
            </>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state,"checkpoint $$$$$$$$$$$$$");
	return { snippetQuestions:state.snippetQuestion.data};
}
export default connect(mapStateToProps)(CodeSnippets);