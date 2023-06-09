import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { NumberInput, NumberInputHandlers, ActionIcon } from '@mantine/core';
import { IconPlus, IconMinus } from '@tabler/icons-react';
import { useStyles } from './styles';



interface QuantityInputProps {
  min?: number;
  max?: number;
  setValue: Dispatch<SetStateAction<number | "">>;
  handlers: any;
  form: any;
}

export function QuantityInput({ min = 1, max = 10, setValue, handlers, form }: QuantityInputProps) {
  const { classes } = useStyles();
  const value = 0;

  return (
    <div className={classes.wrapper}>
      <ActionIcon<'button'>
        size={28}
        variant="transparent"
        onClick={() => handlers.current?.decrement()}
        disabled={value === min}
        className={classes.control}
        onMouseDown={(event) => event.preventDefault()}
      >
        <IconMinus size="1rem" stroke={1.5} />
      </ActionIcon>

      <NumberInput
        variant="unstyled"
        min={min}
        max={max}
        handlersRef={handlers}
        value={value}
        onChange={setValue}
        classNames={{ input: classes.input }}
        {...form.getInputProps('adults')}

      />

      <ActionIcon<'button'>
        size={28}
        variant="transparent"
        onClick={() => handlers.current?.increment()}
        disabled={value === max}
        className={classes.control}
        onMouseDown={(event) => event.preventDefault()}
      >
        <IconPlus size="1rem" stroke={1.5} />
      </ActionIcon>
    </div>
  );
}