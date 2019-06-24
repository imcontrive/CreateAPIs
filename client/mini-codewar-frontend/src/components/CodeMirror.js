import React, { Component } from 'react';


 class Codemirror extends Component {


  challengeFunction = (str) => {
    alert("codemirror");
  }

  render() {
    return (
      <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="side col-md-12">
                <div style={{textAlign:"center"}} className="side col-md-4">
                  <button style={{width:"90%"}} id="run" className="btn btn-primary">Run</button>
                  <div className="console">
                    <p className="pconsole">/**</p>
                    <p className="pconsole indent">* Function out put will go here.</p>
                    <p className="pconsole indent">* /</p>
                  </div>
              </div>
              <div className="side col-md-8">
                <textarea id="codejs">
                  {
                    this.challengeFunction()
                  }
                </textarea>
              </div>
          </div>
          </div>
          </div>
      </React.Fragment>
    )
  }
}

export default Codemirror;
