import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import logo from "./logo/lic-logo.png";
import Gallery from "./Gallery";
import ContactMe from "./ContactMe";
import Avatar from "@material-ui/core/Avatar";
import pic from "./logo/pic.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    margin: 10,
  },
  logo: {
    width: "25%",
    height: "absolute",
    aspectRatio :1
  },
}));

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img className={classes.logo} src={logo} alt="Logo" />
        <ContactMe value={2} showHeader={true}></ContactMe>
      </div>

      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Home" />
          <Tab label="About Me" />
          <Tab label="Contact Me" />
          <Tab label="Gallery" />
        </Tabs>
        <ContactMe value={value}></ContactMe>
        <Gallery value={value}></Gallery>
      </div>
    </div>
  );
}
