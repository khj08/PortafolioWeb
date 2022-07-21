import { makeStyles } from "@material-ui/core";
import Navbar from "./Componentes/Navbar";
import About from "./Componentes/About";
import Skills from "./Componentes/Skills";
import MyWork from "./Componentes/MyWork";
import Contact from "./Componentes/Contact";


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar/>
      <About title="Sobre mí" id="about" dark={true } />
      <Skills title="Skills" id="skills" dark={false } />
      <MyWork title="Mis proyectos" id="work" dark={true } />
      <Contact title="Contacto" id="contact" dark={false} />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {

  }
}))

export default App;
