import { Container, createStyles, rem } from "@mantine/core";
import { ContainedInputs } from "./Form";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundImage:
      `linear-gradient(240deg, ${theme.colors.yellow[6]} 0%, ${theme.colors.pink[7]} 90%)`,
      width: '100%',
      height: rem(200),
    padding: theme.spacing.xl,
  }

}));

export function FormLayout() {
  const { classes } = useStyles();

  return(
    <div className={classes.root}>
      <ContainedInputs/>
  </div>
    )
}