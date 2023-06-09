import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  root: {
    backgroundImage:
      `linear-gradient(240deg, ${theme.colors.yellow[6]} 0%, ${theme.colors.pink[7]} 90%)`,
      width: '100%',
      height: rem(200),
    padding: theme.spacing.xl,
  }

}));