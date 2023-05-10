import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },

  container: {
    display: "flex",
    flexWrap: 'wrap',
    gap: rem(8),
  },

  input: {
    height: rem(54),
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