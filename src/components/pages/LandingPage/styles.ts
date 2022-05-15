import defaultTheme from '../../../assets/themes/default'
import styled from 'styled-components'

export const Logo = styled.img`
  width: 100%;
  max-width: 550px;
`

export const landingBody = {
  item: true,
  xs: 12,
  md: 6,
  sx: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: defaultTheme.palette.primary.main,
    color: defaultTheme.palette.primary.contrastText,
    padding: '48px'
  }
}

export const mainParagraph = {
  variant: 'caption',
  component: 'p',
  sx: {
    margin: '32px 0',
    maxWidth: '75%'
  }
}

export const knowMore = {
  variant: 'body1',
  sx: {
    display: 'flex',
    alignItems: 'center'
  }
}
