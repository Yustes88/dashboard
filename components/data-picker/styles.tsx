import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },


  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: `calc(${theme.spacing.sm} / 2)`,
    zIndex: 1,
  },
}));