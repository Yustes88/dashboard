'use client'

import { Group, Menu, Select, UnstyledButton } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { IconChevronDown } from '@tabler/icons-react';
import { useState } from 'react';
import { useStyles } from './styles';
import { SelectInput } from '../select-input/SelectInput';
import { DataPicker } from '../data-picker/DataPicker';
import { ExtraInputs } from '../extra-input/ExtraInput';






export function Form() {

  const { classes } = useStyles();



  return (
    <form>
    <div className={classes.container}>

      <SelectInput/>

      <DataPicker/>
      
      <ExtraInputs/>

    </div>
    </form>
  );
}