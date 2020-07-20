import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import makeStyles from './styles'

const Home: React.FC = () => {
  const classes = makeStyles()
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            logo
          </Typography>
          <Button variant="contained" component={Link} to="/login">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Home
