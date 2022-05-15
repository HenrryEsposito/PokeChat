import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import FeatherIcon from 'feather-icons-react'
import { Logo, landingBody, mainParagraph, knowMore } from './styles'

function LandingPage () {
  return (
    <>
      <Grid container sx={{ height: '100%' }}>
        <Grid {...landingBody}>
              <Logo src='https://i.imgur.com/2eBRO5B.png'/>
              <Typography {...mainParagraph}>
              Have you ever asked yourself how it would be like to talk to a pokemon? ask no more, this app puts you in a world where every pokemon knows how to use a computer and they are waiting for you to chat!
              </Typography>
              <Typography {...knowMore}>
                KNOW MORE
                <FeatherIcon icon="arrow-right" />
              </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          Login
        </Grid>
      </Grid>
    </>
  )
}

export default LandingPage
