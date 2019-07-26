import React, { Component } from 'react';
import setAuthToken from '../utils/setAuthToken';
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
    // this.codeMirrorStr = "function xyz(){ \n \n // \t write code \n \n }\n \n xyz();";
   }
   
  
  componentDidMount() {
    const { jwt } = localStorage;
    setAuthToken(jwt);
    axios.get('/katas')
      .then((res) => {
        if(res.data.success){
          // console.log(res.data.kata.map(q => q.kata),"checkpoint at code")
          this.props.dispatch({ type: "ALL_KATAS", payload: res.data});
          this.setState({ data: res.data });
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

  // HandleClick function
  // this.codeMirrorStr = `function xyz(){}`
    handleClick = () => {
      var codeMirrorStr1 = this.myCodeMirror.getValue();
      console.log(codeMirrorStr1,"checkpoint22222")
      try{
        this.setState({returnValue : eval(codeMirrorStr1)});
      } catch(err){
        console.log(err);
      }
    };
  render() {
    return (
      <React.Fragment>
        <div className="quesBox" style={{width:"565px",margin:"0 auto", padding:"40px"}}>
          <div className="QuesTitle"style={{color:"red"}}>hh</div>
          
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
                      <p className="pconsole indent"> </p> 
                      </>
                    } </p>
                  </div>

              </div>
              <div className="editor col-md-8">
                <textarea id="codejs">{this.codeMirrorStr ? this.codeMirrorStr : ""}
                </textarea>
                <button id="run" className="btn btn-primary" onClick={this.handleClick}>Run</button>
              </div>
          </div>
          </div>
          </div>
      </React.Fragment>
    )
  }
}
export default CodeMirror;