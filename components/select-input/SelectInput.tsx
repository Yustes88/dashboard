import { Autocomplete, Select } from '@mantine/core';
import { useStyles } from './styles';


//TODO types
export function SelectInput({form}: any) {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
       <Autocomplete
      mt="md"
      withinPortal
      data={['New York', 'Los Angeles', 'Chicago']}
      placeholder="From"
      classNames={classes}
      {...form.getInputProps('origin')}
    />
      <Autocomplete
        mt="md"
        withinPortal
        data={['New York', 'Los Angeles', 'Chicago']}
        placeholder="To"
        classNames={classes}
        {...form.getInputProps('destination')}

      />

    </div>
  );
}