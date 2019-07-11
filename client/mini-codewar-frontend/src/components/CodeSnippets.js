import React, { Component } from 'react';
import setAuthToken from '../utils/setAuthToken';
import { connect } from 'react-redux';
import Prism from "prismjs";
const axios = require('axios');

class CodeSnippets extends Component {
    state = {
      isClicked: false
    }
  componentDidMount(){
		const { jwt } = localStorage;
    setAuthToken(jwt)
    axios.get('/snippets')
    .then((res) => {
      if(res.data.success){
        // console.log(res.data.questions[0].questions,"checkpoint !!!!!!!")
				var spread = res.data.questions[0].questions.map((quest, id) => {
					return {...quest, questId: id+1, isClicked: false}
        })
        // console.log("check point @@@@@ ",spread);
        this.props.dispatch({ type: "ADD_SNIPPETS", payload: spread });
      }
    })
    .catch(function (error) {
      // console.log(error, "catch error in CodeSnippets 1");
    });  
    Prism.highlightAll();
  }

  componentDidUpdate () {
    Prism.highlightAll();
  }

  handleClick = () => {
    this.setState({isClicked: !this.state.isClicked});
  }
  
  render() {
    const snippetQues = this.props.snippetQuestions;
    return (
      <div style={{width:"600px",margin:"0 auto",background:"white",color:"black"}}>
        {
          !snippetQues ? null: snippetQues.map((ques,i)=> (
            <div className="isCodeSnippet" key={i}>
              <p>{ques.question}</p>
              <pre className="language-">
                <code className="language-javascript">
                {ques.code}
                </code>
              </pre>
              <ul>
                {
                  Object.keys(ques.options).map((o, idx) => (
                    <div style={{display: "flex"}} key={idx}>
                      <p key={idx}>{o +" :  "+ ques.options[o]}</p>
                    </div>
                  ))
                }
                <button className="isAns" onClick={this.handleClick}>
                {this.state.isClicked ? <><i className="fas fa-arrow-down"/>Answer </>:
                <><i className="fas fa-arrow-right"/>Answer </>}</button>
                {/* for ans and description */}
                {
                  this.state.isClicked ? 
                  <div className="descript">
                    <small className="ans">ANS:  {ques.answer}</small>
                    <p>{ques.description}</p> 
                  </div> :""
                }
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
