import React, { Component } from 'react'
import logo from '../../../logo.svg'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import MenuItem from 'material-ui/MenuItem'

export default class AppHeader extends Component {
  constructor () {
    super()
    this.state = {
      logged: false
    }
  }
  render () {
    return (
      <AppBar
        title='Title'
        iconElementLeft={(
          <img src={logo} className='app-logo' alt='logo' />
        )}
        iconElementRight={this.state.logged ? <Logged /> : <Login onClick={this.props.sh} />}
      />
    )
  }
}

const Login = (props) => (
  <FlatButton {...props} label='Login' />
)
Login.muiName = 'FlatButton'

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText='Refresh' />
    <MenuItem primaryText='Help' />
    <MenuItem primaryText='Sign out' />
  </IconMenu>
)

Logged.muiName = 'IconMenu'
