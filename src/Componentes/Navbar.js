import { AppBar, List, makeStyles, Toolbar } from '@material-ui/core'
import logo from "../Imagenes/logo-nombre.png"
import { Link, animateScroll as scroll } from "react-scroll";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import EmojiObjectsTwoToneIcon from "@material-ui/icons/EmojiObjectsTwoTone";
import BuildTwoToneIcon from "@material-ui/icons/BuildTwoTone";
import ContactMailTwoToneIcon from "@material-ui/icons/ContactMailTwoTone";


const links = [
  {
    id: "about",
    text: "Sobre mí",
    icon: <InfoTwoToneIcon/>
  },
  {
    id: "skills",
    text: "Mis skills",
    icon: <EmojiObjectsTwoToneIcon/>
  },
  {
    id: "work",
    text: "Mis Proyectos",
    icon: <BuildTwoToneIcon/>
  },
  {
    id: "contact",
    text: "Contacto",
    icon: <ContactMailTwoToneIcon/>
  },
]

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky" className={classes.root } >
        <Toolbar className={classes.toolbar }>
          <img src={logo} className={classes.logo} alt="Logo" />
          <List className={classes.menu}>
            {
              links.map(({id, text}, index)=>(
                <Link key={index} to={id} spy={true} smooth={true} duration={500} offset={-70} >{text}</Link>
              ))
            }

          </List>

        </Toolbar>
        Este el header    
    </AppBar>
  )
}


const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: "#fafafa",
    top:0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  toolbar:{
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  logo: {
    height: "4rem",
    objectFit: "contain",
    "&:hover":{
      cursor: "pointer"
    }
  },
  menu:{
    [theme.breakpoints.down("xs")]:{
      display: "none",
    },
    "& a":{
      color: "#B98DE8",
      fontSize: "1.4rem",
      fontWeight: "bold",
      marginLeft: theme.spacing(3)
    }
  },
}))

export default Navbar