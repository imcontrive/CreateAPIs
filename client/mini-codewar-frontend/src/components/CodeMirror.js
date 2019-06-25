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
    // console.log(this.myCodeMirror.getValue());
    
    // run mode
    // CodeEditor.run.execute(this.myCodeMirror.getValue())
  }
  
  // HandleClick function
    handleClick = () => {
      // var jsx = this.myCodeMirror.getValue();
      // var s = document.createElement('script');
      // s.setAttribute("id", "chalfunction");
      // s.textContent = jsx;
      // console.log(jsx)
      // document.querySelector('.console').appendChild(s);

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
          <div className="container" style={{background:"white", minHeight: "564px", height:"100%",paddingTop:"30px"}}>
            <div className="row">
              <div className="side col-md-12">
                <div style={{textAlign:"center"}} className="side col-md-4">
                  <button style={{width:"90%"}} id="run" className="btn btn-primary" onClick={this.handleClick} >Run</button>
                  <div className="console" style={{minHeight:"300px",height:"100%"}}>
                    <p className="pconsole indent" style={{paddingLeft:"15px"}}>Function output will go here.</p>
                    <p className="pconsole" style={{textAlign:"center",paddingTop:"10px",letterSpacing:"12px"}}>****************</p>


                    <p className="pconsole indent" style={{paddingTop:"20%"}}>{
                      this.state.returnValue ? this.state.returnValue : <>
                      <p className="pconsole" style={{textAlign:"center",letterSpacing:"10px"}}>************</p>
                      <p className="pconsole indent"></p> </>
                    } </p>
                  </div>
              </div>
              <div className="side col-md-8" style={{height:"50%"}}>
                <textarea id="codejs" style={{width: "90%"}}>
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