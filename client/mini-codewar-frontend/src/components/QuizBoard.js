import React, { Component } from 'react';
import { Link} from "react-router-dom";

import setAuthToken from '../utils/setAuthToken';
import { connect } from 'react-redux';
const axios = require('axios');

class QuizBoard extends Component {

	state = {
		score: 0
	}

	componentDidMount(){
		const { jwt } = localStorage;
    setAuthToken(jwt)
    axios.get('/questions')
    .then((res) => {
      if(res.data.success){
				var spread = res.data.questions[0].questions.map((quest, id) => {
					return {...quest, isClicked: false}
				})
        this.props.dispatch({ type: "ADD_QUESTIONS", payload: spread });
      }
    })
    .catch(function (error) {
      // console.log(error, "catch error");
    });
	}

	handleClick = (ques) => {
		this.props.dispatch({type: 'SINGLE_QUESTION', data: ques});
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({[name]: value}); 
	}

	handleSubmit = (e, id) => {
		e.preventDefault();
	
	}

	render() {
		const questions = this.props.questions;
		// console.log(questions,"testing.......................")
		return (
			<div style={{paddingBottom: "20px", color: "#002e43"}}>
					{
						!questions ? null :
							questions.map((ques, index) => (
								<div className="quiz-card" key={index} data-id={ques._id} onClick ={() => this.handleClick(ques)} >
								{
									Object.keys(ques).join().trim().split(",").map((v,i) =>  (
											v === "question" ? 
												<Link to="/quiz/question" key={i} className="nav-link" style={{color:"white"}}><p style={{padding: "20px 0"}} key={i} >{ques[v].toUpperCase()}</p></Link>
											: "" 
									))
								}
								</div>
							))
					}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { questions: state.questions.data,
		singleQues: state.singleQuestion };
}
export default connect(mapStateToProps)(QuizBoard);
