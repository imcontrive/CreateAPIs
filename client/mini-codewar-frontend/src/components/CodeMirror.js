import React, { Component } from 'react';

var CodeEditor = require('codemirror');


 class CodeMirror extends Component {
   constructor(){
     super();
     this.state = {
       returnValue: ""
     }
     this.myCodeMirror = null;
   }

  componentDidMount() {
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
    handleClick = () => {
      var codeMirrorStr = this.myCodeMirror.getValue();
      this.setState({returnValue : eval(codeMirrorStr)});
      console.log(this.state.returnValue,"checkpoint 1");
      // if(returnValue == 6) {
      //   alert('right answer')
      // } else {
      //   alert('wrong answer');
      // }
    };
  render() {
    return (
      <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="side col-md-12">
                <div style={{textAlign:"center"}} className="side col-md-4">
                  <button id="run" className="btn btn-primary" onClick={this.handleClick} >Run</button>
                  <div className="console">
                    <p className="pconsole indent">Function output will go here.</p>
                    <p className="pconsole">****************</p>


                    <p className="pconsole indent">{
                      this.state.returnValue ? this.state.returnValue : <>
                      <p className="pconsole">************</p>
                      <p className="pconsole indent">
                      </p> </>
                    } </p>
                  </div>
              </div>
              <div className="side col-md-8">
                <textarea id="codejs">
                </textarea>
              </div>
          </div>
          </div>
          </div>
      </React.Fragment>
    )
  }
}
export default CodeMirror;