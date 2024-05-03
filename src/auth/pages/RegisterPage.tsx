import React from 'react'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title='Sign Up'>
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='Name' type='text' placeholder='Jhon Doe' fullWidth name='displayName'></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='email' type='email' placeholder='test@test.com' fullWidth name='email'></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='pass' type='password' placeholder='pass' fullWidth name='password'></TextField>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            {/* <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid> */}
            <Grid item xs={12}>
              <Button variant='contained' fullWidth type='submit'>
                Sign Up
              </Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end' display='flex' alignItems='center' gap={1}>
            <Typography>Already have an account?</Typography>
            <Link component={RouterLink} to='/auth/login'>
              Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
