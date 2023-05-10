'use client'

import { Group, Menu, Select, UnstyledButton } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { IconChevronDown } from '@tabler/icons-react';
import { useState } from 'react';
import { useStyles } from './styles';
import { SelectInput } from '../select-input/SelectInput';
import { DataPicker } from '../data-picker/DataPicker';
import { ExtraInputs } from '../extra-input/ExtraInput';
import { Buttons } from '../buttons/Button';
import { useForm } from '@mantine/form';






export function Form() {

  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      origin: '',
      destination: '',
      departDate: null,
      adults: 0,
    },
  }
  );



  return (
    <form>
    <div className={classes.container}>

      <SelectInput form={form}/>

      <DataPicker form={form}/>
      
      <ExtraInputs form={form}/>

      <Buttons type='submit' text='Find ticket' onClick = {(evt) => {
        evt.preventDefault()
        console.log(form.values)
      }}/>

    </div>
    </form>
  );
}