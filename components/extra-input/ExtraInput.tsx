import { useRef, useState } from 'react';
import { createStyles, UnstyledButton, Menu, Image, Group, rem, NumberInputHandlers } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { useStyles } from './styles';
import { QuantityInput } from '../number-input/NumberInput';

const data = [
  { label: 'Adults', comment: 'older than 12' },
];


//
export function ExtraInputs({form}: any) {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });
  const [value, setValue] = useState<number | ''>(1);
  const handlers = useRef<NumberInputHandlers>(null);


  const items = data.map((item) => (
    <div key={item.label} style={{display: 'flex', justifyContent: 'space-between'}}>
      <div style={{color: 'black', display: 'flex', flexDirection: 'column'}}>
        <div>
          {item.label}
       </div>
          <div style={{color: 'gray', opacity: '0.5'}}>
        {item.comment}
          </div>
        </div>
      <QuantityInput setValue={setValue} handlers={handlers} form={form}/>
    </div>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={classes.control}>
          <Group spacing="xs">
            <span className={classes.label}>{value} passenger</span>
          </Group>
          <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}