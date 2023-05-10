import { useStyles } from "./styles";
import { Form } from "../form/Form";



export function FormLayout() {
  const { classes } = useStyles();

  return(
    <div className={classes.root}>
      <Form/>
  </div>
    )
}