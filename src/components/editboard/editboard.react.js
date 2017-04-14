import React, { Component } from 'react'
import AppHeader from './app-header/app-header.react'
import Drawer from 'material-ui/Drawer'
import './editboard.css'

export default class Editorboard extends Component {
  constructor () {
    super()
    this.state = {
      open: false
    }
  }
  toggle () {
    this.setState({open: !this.state.open})
  }
  render () {
    return (
      <div className='editboard'>
        <AppHeader sh={this.toggle.bind(this)} />
        <Drawer className='sidepanel' width={320} openSecondary={!false} open={this.state.open} >
          <h1>Sup</h1>
        </Drawer>
        <div className='container'>

          <h2>Hello Container!</h2>
        </div>
      </div>
    )
  }
}
