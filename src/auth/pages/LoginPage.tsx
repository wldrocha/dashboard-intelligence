import React from 'react'
import { Button, Grid, Link, TextField } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  const onSubmit = () => {
    // event.preventDefault()
    // dispatch(startLoginWithEmailPassword({ email, password }))
  }

  return (
    <>
      <AuthLayout title='Login'>
        <form aria-label='submit-form' onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField label='email' type='email' placeholder='test@test.com' fullWidth name='email'></TextField>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='pass'
                type='password'
                placeholder='pass'
                fullWidth
                inputProps={{ 'data-testid': 'password' }}
                name='password'
              ></TextField>
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <Button variant='contained' fullWidth type='submit'>
                  Login
                </Button>
              </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Link component={RouterLink} to='/auth/register'>
                Sign up
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  )
}
