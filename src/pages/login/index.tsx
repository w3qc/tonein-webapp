import React from 'react'
import TextField from '@material-ui/core/TextField'
import { Typography, Button, Grid } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import useStyles from './styles'

const Login: React.FC = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.container}>
      <div className={classes.formContainer}>
        <form autoComplete="off" className={classes.form}>
          <Typography variant="h2" className={classes.greeting}>
            Welcome!
          </Typography>
          {/* <Typography variant="h6" className={classes.greeting}>
            nice to see you again!
          </Typography> */}
          <TextField
            id="email"
            label="email"
            fullWidth
            type="email"
            margin="normal"
            autoFocus
          />
          <TextField
            id="password"
            label="password"
            fullWidth
            type="password"
            margin="normal"
          />
          <Button color="primary" size="small" className={classes.forgetButton}>
            Forget Password?
          </Button>
          <div className={classes.formButtons}>
            <Button type="submit" color="primary" variant="contained" fullWidth>
              login
            </Button>
          </div>
          <Button color="primary" size="small" className={classes.registerButton}>
            no account?Register NOW!
          </Button>
          <div className={classes.formDividerContainer}>
            <div className={classes.formDivider} />
            <Typography className={classes.formDividerText}>or</Typography>
            <div className={classes.formDivider} />
          </div>
          <div className={classes.socialLoginContainer}>
            <GitHubIcon />
            {/* TODO: import customized svg icons, like: wechat, alipay */}
            <GitHubIcon />
            <GitHubIcon />
          </div>
        </form>
      </div>
      <div className={classes.logoContainer}>
        <Typography variant="h1" component="h2">
          LOGO HERE
        </Typography>
      </div>
    </Grid>
  )
}

export default Login
