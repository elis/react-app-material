import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import _ from 'lodash'
import TextField from 'material-ui/TextField';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

import Editboard from './components/editboard/editboard.react'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Editboard />
      </div>
    )
  }
}



const persist = (fn) => (e) => {
  e.persist()
  return fn(e)
}

export class TestsApp extends Component {
  constructor () {
    super()

    this.state = {
      text: 'sample text'
    }
  }
  update = _.debounce((event) => {
      this.setState({
        text: event.target.value
      })
  }, 400)

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <Title text={this.state.text} />
        </div>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div><Widget
            hint='Title'
            update={persist(this.update.bind(this))} /></div>
        <div><DrawerOpenRightExample /></div>
      </div>
    )
  }
}

const Title = (props) => <h2>Title: {props.text}</h2>

Title.propTypes = {
  text (props, propName) {
    if (!(propName in props)) {
      return new Error(`Missing "${propName}"`)
    }
    if (props[propName].length < 6) {
      return new Error(`Property "${propName}" has to be 6 characters or more`)
    }
  }
}

const Widget = (props) => ( <TextField hintText={props.hint} onChange={props.update} /> )

export default App


class DrawerOpenRightExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <RaisedButton
          label="Toggle Drawer"
          onClick={this.handleToggle}
        />
        <Drawer width={200} openSecondary={false} open={this.state.open} >
          <AppBar title="AppBar" />
        </Drawer>
        <Drawer width={200} openSecondary={true} open={this.state.open} >
          <h1>Sup</h1>
        </Drawer>
      </div>
    );
  }
}
