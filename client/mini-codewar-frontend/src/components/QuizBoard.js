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
      	// this.props.history.push('/');
    		// this.setState({ data: [...res.data.questions[0].questions] })
    		// console.log("state set")
      }
    })
    .catch(function (error) {
      // console.log(error, "catch error");
    });
	}

	handleClick = (ques) => {
		// console.log(ques,"check point 0");
		this.props.dispatch({type: 'SINGLE_QUESTION', data: ques});
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		// console.log(value,"check point 01");
		this.setState({[name]: value}); 
	}

	handleSubmit = (e, id) => {
		e.preventDefault();
		// console.dir(id,"testing ");
		// console.log(id, e,"handleSubmit fired");
	
	}

	render() {
		const questions = this.props.questions;
		// console.log(questions,"testing.......................")
		return (
			<div style={{paddingBottom: "20px"}}>
					{
						!questions ? null :
							questions.map((ques, index) => (
								<div className="quiz-card" key={index} data-id={ques._id} onClick ={() => this.handleClick(ques)} >
								{
									Object.keys(ques).join().trim().split(",").map((v,i) =>  (
											v === "question" ? 
												<Link to="/quiz/question" className="nav-link" style={{color:"white"}}><p style={{padding: "20px 0"}} key={i} >{ques[v].toUpperCase()}</p></Link>
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
	console.log(state, "map state quix...");
	return { questions: state.questions.data };
}
export default connect(mapStateToProps)(QuizBoard);
