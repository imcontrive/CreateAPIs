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
                      <p className="pconsole indent">
                      <iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=function%2520revrot(str%252C%2520sz)%2520%257B%250A%2520%2520const%2520isEven%2520%253D%2520(v)%2520%253D%253E%250A%2520%2520%2520%2520v.split('').reduce((cubeSum%252C%2520d)%2520%253D%253E%2520(cubeSum%2520%252B%253D%2520d%2520**%25203)%252C%25200)%2520%2525%25202%2520%253D%253D%253D%25200%253B%250A%2520%2520const%2520reverse%2520%253D%2520(v)%2520%253D%253E%250A%2520%2520%2520%2520v%250A%2520%2520%2520%2520%2520%2520.split('')%250A%2520%2520%2520%2520%2520%2520.reverse()%250A%2520%2520%2520%2520%2520%2520.join('')%253B%250A%2520%2520const%2520rotate%2520%253D%2520(v)%2520%253D%253E%2520v.slice(1)%2520%252B%2520v.slice(0%252C%25201)%253B%250A%250A%2520%2520return%2520(str.match(new%2520RegExp(%2560.%257B%2524%257Bsz%257D%257D%2560%252C%2520'g'))%2520%257C%257C%2520%255B%255D)%250A%2520%2520%2520%2520.map((v)%2520%253D%253E%2520(isEven(v)%2520%253F%2520reverse(v)%2520%253A%2520rotate(v)))%250A%2520%2520%2520%2520.join('')%253B%250A%257D"
                     >
                    </iframe></p> </>
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