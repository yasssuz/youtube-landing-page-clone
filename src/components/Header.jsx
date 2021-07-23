import { AppBar, Toolbar, IconButton, Button } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AppsIcon from "@material-ui/icons/Apps";
import VideoCallIcon from "@material-ui/icons/VideoCall";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: "1",
  },
  menuIcon: {
    marginRight: theme.spacing(5),
  },
  appBar: {
    boxShadow: "none",
    paddingRight: theme.spacing(6),
    paddingLeft: theme.spacing(6),
    zIndex: theme.zIndex.drawer + 1,
  },
  listItemText: {
    fontSize: 14,
  },
  logo: {
    height: 28,
  },
  icons: {
    marginRight: theme.spacing(1),
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar color='inherit' className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge='start'
          className={classes.menuIcon}
          color='inherit'
          aria-label='menu'
        >
          <MenuIcon />
        </IconButton>
        <img
          src='/assets/preto.png'
          alt='black logo'
          className={classes.logo}
        />
        <div className={classes.grow} />
        <IconButton className={classes.icons} color='inherit'>
          <VideoCallIcon />
        </IconButton>
        <IconButton className={classes.icons} color='inherit'>
          <AppsIcon />
        </IconButton>
        <IconButton className={classes.icons} color='inherit'>
          <MoreVertIcon />
        </IconButton>
        <Button
          startIcon={<AccountCircleIcon />}
          variant='outlined'
          color='secondary'
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}
