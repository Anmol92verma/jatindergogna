import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ReactWhatsapp from "react-whatsapp";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { green } from "@material-ui/core/colors";
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
  phone: {
    color: green[500],
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function ContactMe(props) {
  const { showHeader } = props;
  const classes = useStyles();

  let content;
  if (showHeader) {
    content = <Header></Header>;
  } else {
    content = (
      <div>
        <ContactInfo></ContactInfo>
      </div>
    );
  }

  return (
    <div style={{ marginRight: 10 }}>
      <Paper elevation={0}>
        <div className={classes.cardHeader}>{content}</div>
      </Paper>
    </div>
  );
}

export function PhoneNumberCustom(props) {
  const { phoneNumber, text } = props;
  const classes = useStyles();
  return (
    <div className={classes.flexRow}>
      <PhoneIcon fontSize="large" style={{ marginRight: 20 }}></PhoneIcon>
      <div className={classes.cardHeader}>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {text}
        </Typography>
        <PhoneNumber
          number={phoneNumber}
          isLinked={true}
          element="label"
        ></PhoneNumber>
      </div>
    </div>
  );
}

export function WhatsAppNumber(props) {
  const { phoneNumber, text } = props;
  const classes = useStyles();

  return (
    <ReactWhatsapp
      number={phoneNumber}
      message="Hi! I want to connect with you."
      element="div"
    >
      <div className={classes.flexRow}>
        <WhatsAppIcon
          className={classes.phone}
          fontSize="large"
          style={{ marginRight: 10 }}
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
    </ReactWhatsapp>
  );
}

export function Header() {
  const classes = useStyles();

  return (
    <div className={classes.flexRow}>
      <Avatar alt="Jatinder Kumar Gogna" src={pic} className={classes.large} />

      <div className={classes.cardHeader} style={{ marginLeft: 5 }}>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
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
  );
}

export function ContactInfo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <WhatsAppNumber
          phoneNumber={"+919815778354"}
          text={"WhatsApp"}
        ></WhatsAppNumber>
        <PhoneNumberCustom
          phoneNumber={"+919815778354"}
          text={"Call"}
        ></PhoneNumberCustom>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <WhatsAppNumber
          phoneNumber={"+918283848354"}
          text={"WhatsApp"}
        ></WhatsAppNumber>
        <PhoneNumberCustom
          phoneNumber={"+918283848354"}
          text={"Call"}
        ></PhoneNumberCustom>
      </div>
      <EmailView></EmailView>
      <div style={{marginBottom:50}}></div>
    </div>
  );
}

export function EmailView() {
  const classes = useStyles();

  return (
    <div className={classes.flexRow}>
      <EmailIcon
        fontSize="large"
        element="label"
        style={{ marginRight: 20 }}
      ></EmailIcon>
      <div className={classes.cardHeader}>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          Email Me
        </Typography>
        <Linkify>
          <Typography className={classes.email}>
            jatinderkumargogna@gmail.com
          </Typography>
        </Linkify>
      </div>
    </div>
  );
}
