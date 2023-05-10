import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),
  },
}));