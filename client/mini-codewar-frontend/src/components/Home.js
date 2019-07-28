import React, { Component } from 'react';
// import LeaderBoard from './LeaderBoard';


class Home extends Component {
	render() {
		return (
			<div>
				<div className="hero" style={{ width:"100%",height:"600px",backgroundSize:"100% 100%",backgroundImage: "url(" + "/media/raw.jpg" + ")"}}>
					<h3 style={{bottom:"-135px",left: "276.5px",textAlign: "center",fontWeight: "800",fontStyle: "italic",textDecoration: "none",fontFamily: "Lato",fontSize: "50px",color: "rgb(255, 255, 255)",margin: "0px",zIndex: "auto",width: "798px",height: "240px",padding: "0px",borderWidth: "0px",borderRadius: "0px",letterSpacing:"0px",position:"relative"}}>Welcome to codeClash <small style={{display:"block", fontSize:"20px"}}>Anyone Can Practice and Perfect their Programming Skills.</small></h3>
				</div>
			</div>
		);
	}
}

export default Home;


