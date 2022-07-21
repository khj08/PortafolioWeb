import React from 'react'
import { makeStyles } from "@material-ui/core";

const Skills = ({title, dark, id}) => {
  const classes = useStyles();
  return (
    <div className={ `${classes.section} ${dark && classes.sectiondark}`} >
      Mis Skills
    </div>
  )

}

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",

  },
  sectiondark: {
    background: "#FFB8CE",
    color: "#fff",
  },

}))


export default Skills