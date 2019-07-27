import React, { Component } from 'react';
import setAuthToken from '../utils/setAuthToken';
import { connect } from 'react-redux';

const axios = require('axios');

var CodeEditor = require('codemirror');

class CodeMirror extends Component {
   constructor(){
     super();
     this.state = {
       returnValue: ""
     }
     this.data = null;
     this.myCodeMirror = null;
     this.codeMirrorStr1 = null;
     this.error = null;
    // this.codeMirrorStr = "function xyz(){ \n \n // \t write code \n \n }\n \n xyz();";
   }
   
  
  componentDidMount() {
    const { jwt } = localStorage;
    setAuthToken(jwt);
    axios.get('/katas')
      .then((res) => {
        if(res.data.success){
          // console.log(res.data.kata.map(q => q.kata),"checkpoint at code")
          this.props.dispatch({ type: "ADD_KATAS", payload: res.data.kata});
          this.setState({ data: res.data.kata });
        }
      })
      .catch(function (error) {
        console.log(error, "catch error");
      });

    this.myCodeMirror = CodeEditor.fromTextArea(document.getElementById("codejs"), {
      value: "function add(){ return 21 }",
      mode:  "javascript",
      lineNumbers: true,
      theme: "erlang-dark",
      indentUnit: 2,
      smartIndent: true,
      lineWiseCopyCut: true
    });
    
  }
  // component will update
  // componentWillUpdate(){
  //   const {data} = this.props.katas ;
  // }

  //   const {data} = this.props.katas; 
  //  data ? data.map( x => this.setState({codeMirrorStr1 : x.code})) : "";
  // HandleClick function
  // this.codeMirrorStr = `function xyz(){}`
    handleClick = () => {

     var  codeMirrorStr1 = this.myCodeMirror.getValue();
      console.log(codeMirrorStr1,"checkpoint22222")
      try{
        this.setState({returnValue : eval(codeMirrorStr1)});
      } catch(err){
        this.setState({error : err});
        console.log(err);
        // console.log(this.state.error)
      }
    };
  render() {
    const {data} = this.props.katas;
    console.log(data,"inrender")
    return (
      
      <React.Fragment>
        <div className="quesBox" style={{width:"950px",margin:"0 auto", padding:"40px 20px"}}>
          <div className="QuesTitle"style={{color:"white", letterSpacing:"1px",lineHeight:"1.5"}}>{
           data ?  data.map( x => 
            <div className="katas">
              <p style={{color:"white",fontWeight:"700",fontSize:"30px"}}> {x.kata}</p> 
              <p className="level">{x.level}</p>
              <p>{x.description}</p>
            </div>
           ) : ""
          }</div>
          
        </div>
        <div className="container" style={{minHeight:"565px",height:"100%"}}>
            <div className="row clearfloat">
              <div className="side col-md-12">
                <div style={{textAlign:"center"}} className="editor col-md-4">
                {/* Output consoles */}
                <p className="pconsole indent" style={{color:"white",background:"#002240",padding:"10px",fontFamily:"roboto"}}>
                Your results will be shown here.</p>
                  <div className="console">
                    <p style={{padding:"10px"}}>___________________________________</p>
                    <p className="pconsole indent">{
                      this.state.returnValue ? this.state.returnValue : <>
                      <p className="pconsole indent" style={{color: "red"}}>{this.state.error ? this.state.error : ""} </p> 
                      </>
                    } </p>
                  </div>
              </div>
              <div className="editor col-md-8">
                    {/* codeMirror text Area */}
                <textarea id="codejs">
                </textarea>
                <button id="run" className="btn btn-primary" onClick={this.handleClick}>Run</button>
                {/* test container */}
                <div className="test" style ={{color:"white",background:"#002272",padding:"20px 40px" }}>
                  {
                    data ?  data.map( x => 
                        <p>TestCase: {x.testCase}</p> 
                      ) : ""
                  }  
                </div>
              </div>
          </div>
          </div>
          </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state.katas.data,"test case 04");
	return { 
      katas: state.katas
   };
}
export default connect(mapStateToProps)(CodeMirror);
