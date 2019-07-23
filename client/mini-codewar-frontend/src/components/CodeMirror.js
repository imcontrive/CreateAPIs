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
  //IIfes for  compiler 
  // ( () => function addTogether() {
  //   var x = 20;
  //   var y = 20;
  //   var answer = x + y;
  //   console.log(answer);
  //   });

  // HandleClick function
    handleClick = () => {
      var codeMirrorStr = this.myCodeMirror.getValue();
      try{
        this.setState({returnValue : eval(codeMirrorStr)});
      } catch(err){
        console.log(err);
      }
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
          <div className="container" style={{minHeight:"565px",height:"100%"}}>
            <div className="row clearfloat">
              <div className="side col-md-12">
                <div style={{textAlign:"center"}} className="editor col-md-4">
                {/* Output consoles */}
                <p className="pconsole indent" style={{color:"white",background:"#002240",padding:"1px 0px"}}>Your Output will be here.</p>
                  <div className="console">
                    <p>___________________________________</p>
                    <p className="pconsole indent">{
                      this.state.returnValue ? this.state.returnValue : <>
                      <p className="pconsole indent">
                      </p> </>
                    } </p>
                  </div>

              </div>
              <div className="editor col-md-8">
                <textarea id="codejs">
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