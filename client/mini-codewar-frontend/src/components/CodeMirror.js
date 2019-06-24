import React, { Component } from 'react';

var CodeEditor = require('codemirror');


 class CodeMirror extends Component {
   constructor(){
     super();
     this.myCodeMirror = null;
   }

  componentDidMount() {
    this.myCodeMirror = CodeEditor.fromTextArea(document.getElementById("codejs"), {
      value: "function add(){ return 21 }",
      mode:  "javascript",
      lineNumbers: true,
      theme: "dracula"
    });
    console.log(this.myCodeMirror.getValue())
  }
  
  // HandleClick function
    handleClick = () => {
      var jsx = this.myCodeMirror.getValue();
      var s = document.createElement('script');
      s.setAttribute("id", "chalfunction");
      s.textContent = jsx;//inne
      console.log(jsx)
      document.querySelector('.console').appendChild(s);
      };


  render() {
    return (
      <React.Fragment>
          <div className="container" style={{background:"white", minHeight: "564px", height:"100%",paddingTop:"30px"}}>
            <div className="row">
              <div className="side col-md-12">
                <div style={{textAlign:"center"}} className="side col-md-4">
                  <button style={{width:"90%"}} id="run" className="btn btn-primary" onClick={this.handleClick} >Run</button>
                  <div className="console" style={{minHeight:"400px",height:"100%"}}>
                    <p className="pconsole">/**</p>
                    <p className="pconsole indent">** Function out put will go here.</p>
                    <p className="pconsole indent">* </p>
                    <p className="pconsole indent">* </p>
                    <p className="pconsole indent">* /</p>
                  </div>
              </div>
              <div className="side col-md-8">
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
