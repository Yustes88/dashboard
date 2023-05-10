import { Select } from '@mantine/core';
import { useStyles } from './styles';



export function SelectInput() {
  const { classes } = useStyles();

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

    </div>
  );
}