import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import setAuthToken from '../utils/setAuthToken';
import { connect } from 'react-redux';
const axios = require('axios');

class SingleQuestion extends Component {

	state = {
		score: 0,
		clickedOption: ""
	}

	componentDidMount(){
		const { jwt } = localStorage;
    setAuthToken(jwt)
    // axios.get('/questions')
    // .then((res) => {
    //   if(res.data.success){
    //     this.props.dispatch({ type: "ADD_QUESTIONS", payload: res.data.questions[0].questions });
    //   	// this.props.history.push('/');
    // 		// this.setState({ data: [...res.data.questions[0].questions] })
    // 		// console.log("state set")
    //   }
    // })
    // .catch(function (error) {
    //   // console.log(error, "catch error");
    // });
	}
	
	// INCREASE SCORE INTO DB
	IncreseScore = (id) => {
		axios.post(`http://localhost:7070/api/v1/users/${id}/increasescore`).then((res) => {
			console.log(res, 'response object');
			if(res.data.success){
        this.props.dispatch({ type: "UPDATE_USER_SCORE", payload: res.data });
				alert("Correct Option, Score INC by point 1")
				console.log("successs",res.data.success);
			}
		})
	}


	// save clickedoption to react State
	handleChange = (e) => {
		const { value } = e.target;
		this.setState({clickedOption: value});
		console.log("clicked option true") 
	}

	handleSubmit = (e, id) => {
		e.preventDefault();
		const {singleQues} = this.props; 
		// check clickedoption is right or not 
		if(singleQues.correct === this.state.clickedOption) {
			const {user} = this.props;
			// INCREASE SCORE INTO DB
			const id = user._id;
			this.IncreseScore(id);
      this.props.history.push('/quiz');
		}else {
      this.props.history.push('/quiz');
		}
	}

	render() {
	const {singleQues} = this.props;
		// console.log(singleQues,"testing.......................")
		return (
			<div style={{minHeight: "564px", height:"100%",padding:"20px"}}>
					 {
						!singleQues ? null :
								<div className="quiz-card"  data-id={singleQues._id}>
								{
									Object.keys(singleQues).join().trim().split(",").map((v,i) =>  (
											v === "question" ? 
												<p style={{padding: "20px 0"}} key={i} >{singleQues[v].toUpperCase()}</p>
											:
											v === "options" ? 
												Object.keys(singleQues.options).map((o, idx) => (
													<div style={{display: "flex"}} key={idx}>
														<input type="radio" name={singleQues._id} onChange = { (e) => this.handleChange(e)} value={o} />
														<p key={idx}>{o +" :  "+ singleQues.options[o]}</p>
													</div>
												))
											: "" 
									))
								}
								</div>
					} 
					<button className="button is-small is-danger" style={{marginTop: '20px',fontSize:"20px",paddingLeft:"50px",
					paddingRight:"50px", marginLeft:"45%"}} onClick={ (e,o) => this.handleSubmit(e,`options${o}`)}>Verify</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state,"last checked......");
	return { 
		singleQues: state.singleQuestion,
		user: state.user.user
	};
}
export default connect(mapStateToProps)(SingleQuestion);
