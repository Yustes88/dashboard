import { ActionIcon, createStyles, rem, Select, TextInput, TextInputProps, useMantineTheme } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons';


const useStyles = createStyles((theme) => ({

  container: {
    display: "flex",
    flexWrap: 'wrap',
    gap: rem(8),
  },

  root: {
    position: 'relative',
  },

  input: {
    height: rem(64),
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

export function ContainedInputs() {
  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles();
  const theme = useMantineTheme();


  return (
    <div className={classes.container}>

      <Select
        mt="md"
        withinPortal
        data={['React', 'Angular', 'Svelte', 'Vue']}
        placeholder="From"
        classNames={classes}
      />
      <Select
        mt="md"
        withinPortal
        data={['React', 'Angular', 'Svelte', 'Vue']}
        placeholder="To"
        classNames={classes}
      />
      <DatePickerInput
        mt="md"
        popoverProps={{ withinPortal: true }}
        label="Departure date"
        placeholder="When will you leave?"
        classNames={classes}
        clearable={false}
      />
    </div>
  );
}