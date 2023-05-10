import { Button } from '@mantine/core';
import { useStyles } from './styles';

interface ButtonsProps {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
}

export function Buttons({type, text}: ButtonsProps) {
  const { classes } = useStyles();

  return (
    <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              className={classes.control}
              mt={type === 'submit' ? 15 : 40}
              type={type}
            >
              {text}
            </Button>
  );
}