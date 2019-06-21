import React, { Component } from 'react';
import setAuthToken from '../utils/setAuthToken';
import { connect } from 'react-redux';
const axios = require('axios');

class LeaderBoard extends Component {
	
	state = {
    data: null
  }

	componentDidMount() {
	const { jwt } = localStorage;
    setAuthToken(jwt);
    axios.get('/users')
    .then((res) => {
      // console.log(res.data.users, "data cdm dash...");
      if(res.data.success){
        this.props.dispatch({ type: "ALL_USERS", payload: res.data.users });
        this.setState({ data: res.data.users });
        // this.props.history.push('/');
      }
    })
    .catch(function (error) {
      console.log(error, "catch error");
    });
	}

	render() {
    const data = this.state.data || null; 
    // const allUsers = this.props.user.allUsers;
    // console.log(data, allUsers,"test 99999999");
    // const sortedUser = data.map(user => {
    //   user.sort(a,b => {
    //     a.score- b.score
    //   })
    // })
    // console.log("sortedUser",sortedUser);
    
    
		return (
        <div className="users" style={{minHeight: "564px", height:"100%"}}>
          <div style={{ display: "flex",flexDirection: "column",alignItems: "center"}}>
            <table>
              <tr>
                <th style={{paddingBottom: "30px"}}>
                  Position
                </th>
                <th style={{paddingBottom: "30px"}}>
                  Username
                </th>
                <th style={{paddingBottom: "30px"}}>
                  Score
                </th>
              </tr>
        {
          !data ? null: data.map((user,index) => (
            <>
            <tr>
              <th style={{paddingLeft:"40px"}}>
                {`${index + 1}`}
              </th>
              <th>
                {user.username}
              </th>
              <th style={{paddingLeft:"30px"}}>
                {user.score}
              </th>
              </tr>
            </>
          ))
        }
        </table>
      </div>
    </div>
		);
	}
}

function mapStateToProps(state) {
  console.log(state, "dash...");
  return {
    user: state.user,
  }
}


export default connect(mapStateToProps)(LeaderBoard);
