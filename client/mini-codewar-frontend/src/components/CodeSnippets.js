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
      <div style={{width:"600px",margin:"0 auto",background:"white",color:"black"}}>
        {
          !snippetQues ? null: snippetQues.map((ques,i)=> (
            <div>
            <p>{ques.question}</p>
            <iframe src={`${ques.iframe}`} style={{transform:"scale(0.7)",width:"100%",height:"300px", border:"0",overflow:"hidden",}} />
            <ul>
              {
                	Object.keys(ques.options).map((o, idx) => (
                    <div style={{display: "flex"}} key={idx}>
                      <input type="radio" name={ques._id} onChange = { (e) => this.handleChange(e)} value={o} />
                      <p key={idx}>{o +" :  "+ ques.options[o]}</p>
                    </div>
                  ))
                
              }
              <button >Answer</button>
            </ul>
            </div>
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


{/* <iframe
  src="https://carbon.now.sh/embed/?bg=rgba(245%2C166%2C35%2C1)&t=one-light&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520bird%2520%253D%2520%257B%250A%2520%2520size%253A%2520%2522small%2522%250A%257D%253B%250A%250Aconst%2520mouse%2520%253D%2520%257B%250A%2520%2520name%253A%2520%2522Mickey%2522%252C%250A%2520%2520small%253A%2520true%250A%257D%253B"
  
  >
</iframe> */}