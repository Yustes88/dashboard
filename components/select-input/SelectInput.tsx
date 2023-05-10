import { Autocomplete, Select } from '@mantine/core';
import { useStyles } from './styles';


//TODO types
export function SelectInput({form}: any) {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
       <Autocomplete
      label="Origin"
      placeholder="Enter city or airport"
      data={['New York', 'Los Angeles', 'Chicago']}
      {...form.getInputProps('origin')}
    />
      <Select
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