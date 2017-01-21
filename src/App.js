import React, { Component } from 'react';
import {RaisedButton, AppBar} from 'material-ui'
import './App.scss'

class App extends Component {
  state = {
    clicked: false
  };

  handleClick() {
    this.setState({clicked: true});
  }

  render() {

    const {clicked} = this.state;

    return (
      <div className='App'>
        <AppBar
          title='Title!'
        />
        <RaisedButton label={clicked ? 'Thanks!' : 'Click me!'} primary={clicked} disabled={clicked} onClick={this.handleClick.bind(this)}/>
      </div>
    );
  }
}

export default App;
