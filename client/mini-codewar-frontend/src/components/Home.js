import React, { Component } from 'react';

class Home extends Component {
	render() {
		return (
			<div>
				<div className="hero" style={{ width:"100%",height:"600px",backgroundSize:"100% 100%",backgroundImage: "url(" + "/media/raw.jpg" + ")"}}>
					<h3 style={{bottom:"-135px",left: "276.5px",textAlign: "center",fontWeight: "800",fontStyle: "italic",textDecoration: "none",fontFamily: "Lato",fontSize: "50px",color: "rgb(255, 255, 255)",margin: "0px",zIndex: "auto",width: "798px",height: "240px",padding: "0px",borderWidth: "0px",borderRadius: "0px",letterSpacing:"0px",position:"relative"}}>Alternative to Codewars <small style={{display:"block", fontSize:"20px"}}>Anyone Can Practice and Perfect their Programming Skills.</small></h3>
					{/* It is a place built for anyone to practice and perfect their programming skills. Challenges are added almost every day so you can work on applying your..Practice and Perfect their Programming Skills. */}

				</div>
			</div>
		);
	}
}

export default Home;
