import Link from '@mui/material/Link'
import { makeStyles } from 'tss-react/mui'
import React, { FC, ReactElement } from 'react'

const useStyles = makeStyles()((theme) => {
  return {
    list: {
      lineHeight: 1.5,
      listStyleType: 'none',
      margin: 0,
      padding: 0
    },

    listItem: {
      margin: 0,
      padding: 0,
      textAlign: 'right'
    },

    root: {
      backgroundColor: '#f5f5f5',
      color: '#424242',
      fontSize: '0.9rem',
      marginTop: theme.spacing(6),
      padding: theme.spacing(3, 2, 4)
    }
  };
});

const Footer: FC = (): ReactElement => {
  const { classes } = useStyles()

  return (
    <footer className={classes.root}>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          {'Inspired by '}
          <Link
            href="https://github.com/ykzts/chat-styles"
            rel="noopener noreferrer"
            target="_blank"
          >
            Chat v2.0 Style Generator
          </Link>
        </li>
        <li className={classes.listItem}>
          {'Created by '}
          <Link
            href="https://github.com/hanabiiii/"
            rel="noopener noreferrer"
            target="_blank"
          >
            hanabiiii
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
