import makeStyles from "@material-ui/core/styles/makeStyles";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <SideBar />
    </div>
  );
}
