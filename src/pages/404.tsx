import Typography from '@mui/material/Typography'
import { makeStyles } from 'tss-react/mui'
import React, { FC, ReactElement } from 'react'
import { Helmet } from 'react-helmet-async'

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      padding: theme.spacing(2, 0)
    }
  };
});

const NoMatch: FC = (): ReactElement => {
  const { classes } = useStyles()

  return (
    <div className={classes.root}>
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>

      <Typography component="h1" variant="h3">
        404 Not Found
      </Typography>

      <Typography component="p" variant="body1">
        あなたのお探しのページは見つけることができませんでした。
      </Typography>
    </div>
  )
}

export default NoMatch
