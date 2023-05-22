'use client'
import { FlightData } from '@/types/types';
import { createStyles, Card, Group, Switch, Text, rem } from '@mantine/core';


const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  item: {
    '& + &': {
      paddingTop: theme.spacing.sm,
      marginTop: theme.spacing.sm,
      borderTop: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
    },
  },

  switch: {
    '& *': {
      cursor: 'pointer',
    },
  },

  title: {
    lineHeight: 1,
  },
}));

type SwitchesCardProps = {
  data: FlightData[];
}

export function SwitchesCard({ data }: SwitchesCardProps) {
  const { classes } = useStyles();

  const items = data.map((item) => (
    <Group position="apart" key={item.aircraft?.iata} className={classes.item} noWrap spacing="xl">
      <div>
        <Text>{item.flight.number}</Text>
        <Text size="xs" color="dimmed">
          {item.departure.airport}
        </Text>
      </div>
      {/* <Switch onLabel="ON" offLabel="OFF" className={classes.switch} size="lg" /> */}
    </Group>
  ));

  return (
    <Card withBorder radius="md" p="xl" className={classes.card}>
      <Text fz="lg" className={classes.title} fw={500}>
        {"Search results"}
      </Text>
      <Text fz="xs" c="dimmed" mt={3} mb="xl">
        {'some text'}
      </Text>
      {items}
    </Card>
  );
}