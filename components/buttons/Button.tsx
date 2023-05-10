import { Button } from '@mantine/core';
import { useStyles } from './styles';

interface ButtonsProps {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  onClick: (evt: any) => void
}

export function Buttons({type, text, onClick}: ButtonsProps) {
  const { classes } = useStyles();

  return (
    <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              className={classes.control}
              mt={type === 'submit' ? 15 : 40}
              type={type}
              onClick={onClick}
            >
              {text}
            </Button>
  );
}