import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { makeStyles } from 'tss-react/mui'
import { type FC, type ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import Footer from 'components/molecules/Footer'

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      marginTop: theme.spacing(4)
    }
  };
});

type Props = {
  children: ReactNode
  title: string
}

const Layout: FC<Props> = ({ children, title }) => {
  const { classes } = useStyles()

  return (
    <>
      <Helmet defaultTitle={title} titleTemplate={`%s - ${title}`}>
        <link
          href="https://fonts.googleapis.com/css?display=swap&amp;family=Roboto:400,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?display=swap&amp;family=Noto+Sans+JP:400,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?display=swap&amp;family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?display=swap&amp;family=Inconsolata"
          rel="stylesheet"
        />
      </Helmet>

      <CssBaseline />

      <AppBar position="static">
        <Toolbar>
          <Typography noWrap variant="h6">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>

      {children && (
        <Container className={classes.container}>{children}</Container>
      )}

      <Footer />
    </>
  )
}

export default Layout
