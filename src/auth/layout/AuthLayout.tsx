import { Grid, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

interface Props {
  children: React.ReactNode
  title?: string
}

export const AuthLayout = ({ children, title = '' }: Props) => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ minHeight: '100vh', backgroundColor: grey[200], padding: 0 }}
    >
      <Grid
        item
        xs={3}
        sx={{
          width: { md: '450px' },
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2
        }}
      >
        <Typography variant='h5' sx={{ mb: 1 }}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  )
}
