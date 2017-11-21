import React from 'react'
import { render } from 'react-dom'

export default class Header extends React.Component {

  render() {
    return (
      <div id="main-header">
        <div class="responsive">
          <h1 className="title">Mysurance</h1>
        </div>
      </div>
    );
  }
}
