import React, { Component } from 'react'

export default class Header2 extends Component {
  render() {
    return (
      <>
      <div className="header">
        <div className="header-main">
          <div>
            Logo
          </div>
          <div className="header-list">
            <ul>
              <li className="list-items">
                Quiz
              </li>
              <li className="list-items">
                Snippets
              </li>
              <li className="list-items">
                Editor
              </li>
              <li className="list-items">
                Leaderboard
              </li>
            </ul>
          </div>
        </div>
        <div>
          Logout
        </div>
      </div>
      </>
    )
  }
}
