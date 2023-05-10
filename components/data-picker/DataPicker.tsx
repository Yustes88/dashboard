import { DatePickerInput } from '@mantine/dates';
import { useStyles } from './styles';


//TODO types
export function DataPicker({form}: any) {
  const { classes } = useStyles();

  return (

    <DatePickerInput
    mt="md"
    popoverProps={{ withinPortal: true }}
    label="Departure date"
    placeholder="When will you go?"
    classNames={classes}
    clearable={false}
    {...form.getInputProps('departDate')}
  />
  );
}