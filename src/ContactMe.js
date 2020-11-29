import TabPanel from "./TabPanel";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ReactWhatsapp from "react-whatsapp";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";
import Linkify from "react-linkify";
import PhoneNumber from "react-phone-number";
import PhoneIcon from "@material-ui/icons/Phone";
import Avatar from "@material-ui/core/Avatar";
import pic from "./logo/pic.jpg";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

  cardHeader: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    marginTop: 12,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function ContactMe(props) {
  const { children, value, index,showHeader, ...other } = props;
  const classes = useStyles();

  let content;
  if(!showHeader){
      content = <div>
      <WhatsAppNumber phoneNumber={"+919815778354"} text={"Official Number"}></WhatsAppNumber>
      <PhoneNumberCustom phoneNumber={"+919815778354"} ></PhoneNumberCustom>
      <div className={classes.flexRow}>
        <EmailIcon
          color="primary"
          fontSize="large"
          element="label"
          style={{ marginRight: 20 }}
        ></EmailIcon>
        <Linkify>jatinderkumargogna@gmail.com</Linkify>
      </div>
      <WhatsAppNumber phoneNumber={"+918283848354"} text={"Alternate Number"}></WhatsAppNumber>
      <PhoneNumberCustom phoneNumber={"+918283848354"} ></PhoneNumberCustom>
      </div>

  }else{
    content = <div></div>
  }

  return (
    <TabPanel value={value} index={2}>
      <Paper elevation={0}>
      <div className={classes.cardHeader}>
            <div className={classes.flexRow}>
              <Avatar
                alt="Jatinder Kumar Gogna"
                src={pic}
                className={classes.large}
              />

              <div className={classes.cardHeader} style={{ marginLeft: 20 }}>
                <Typography
                  className={classes.title}
                  color="textPrimary"
                  gutterBottom
                >
                  Jatinder Kumar Gogna
                </Typography>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Chief Life Insurance Advisor
                </Typography>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  C.M. Club Member
                </Typography>
              </div>
            </div>
          
            {content}
           
          </div>
      </Paper>
    </TabPanel>
  );
}

export function PhoneNumberCustom(props){
    const { phoneNumber } = props;
    const classes = useStyles();
    return (<div className={classes.flexRow}>
        <PhoneIcon
          color="primary"
          fontSize="large"
          style={{ marginRight: 20 }}
        ></PhoneIcon>
        <PhoneNumber
          number={phoneNumber}
          isLinked={true}
          element="label"
        ></PhoneNumber>
      </div>)
}


export function WhatsAppNumber(props){
    const { phoneNumber,text } = props;
    const classes = useStyles();

    return (<ReactWhatsapp
        number = {phoneNumber}
        message="Hi! I want to connect with you."
        element="div"
      >
        <div className={classes.flexRow}>
          <WhatsAppIcon
            color="primary"
            fontSize="large"
            style={{ marginRight: 20 }}
          ></WhatsAppIcon>{" "}
          <div className={classes.cardHeader}>
            <Typography
              className={classes.title}
              color="textPrimary"
              gutterBottom
            >
              {text}
            </Typography>
            <PhoneNumber
              number={phoneNumber}
              isLinked={false}
              element="label"
            ></PhoneNumber>
          </div>
        </div>
      </ReactWhatsapp>)
}