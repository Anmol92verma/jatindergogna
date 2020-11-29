import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "./logo/lic-logo.png";
import Gallery from "./Gallery";
import ContactMe from "./ContactMe";

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
        <ContactMe showHeader={true}></ContactMe>
      </div>

      <div>
      <Gallery></Gallery>
      <ContactMe></ContactMe>
     
      </div>
    </div>
  );
}
