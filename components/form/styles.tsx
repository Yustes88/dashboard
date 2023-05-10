import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({

  container: {
    display: "flex",
    flexWrap: 'wrap',
    gap: rem(8),
  },

  root: {
    position: 'relative',
  },
}));