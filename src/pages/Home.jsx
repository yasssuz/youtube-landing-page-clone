import makeStyles from "@material-ui/core/styles/makeStyles";
import { Box } from "@material-ui/core";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Main from "../components/Main";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    background: theme.palette.background.dark,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Box display='flex'>
        <SideBar />
        <Main />
      </Box>
    </div>
  );
}
