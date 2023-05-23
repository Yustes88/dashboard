'use client'
import { FlightOffer } from '@/types/types';
import { createStyles, Card, Group, Switch, Text, rem, Badge, Col, Grid, Title } from '@mantine/core';


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
  data: FlightOffer[]
}

export function SwitchesCard({ data }: SwitchesCardProps) {
  const { classes } = useStyles();

  const items = data.map((item) => (
    <Group position="apart" key={item.id} className={classes.item} noWrap spacing="xl">
      <div>
        <Text>{item.price.grandTotal}</Text>
        <Text size="xs" color="dimmed">
          {/* {item.} */}
        </Text>
      </div>
      {/* <Switch onLabel="ON" offLabel="OFF" className={classes.switch} size="lg" /> */}
    </Group>
  ));

  return (
    <Card shadow="xs" style={{ maxWidth: '100%', padding: '0 1rem'}}>
        <Title>
          <Text style={{ marginTop: '0.5rem', fontWeight: 'bold', fontSize: '2rem', zIndex: 100 }}>
            €307.00
          </Text>
        </Title>
      <Grid gutter="lg">
        <Col span={3}>
          <Text weight={500}>Departure</Text>
          <Text>SYD</Text>
          <Text weight={500}>12:35 PM</Text>
        </Col>
        <Col span={3}>
          <Text weight={500}>Arrival</Text>
          <Text>SIN</Text>
          <Text weight={500}>6:55 PM</Text>
        </Col>
        <Col span={3}>
          <Text weight={500}>Duration</Text>
          <Text>8h 20m</Text>
        </Col>
        <Col span={3}>
          <Text weight={500}>Airline</Text>
          <Text>TR</Text>
          <Text weight={500}>Flight No.</Text>
          <Text>3</Text>
        </Col>
      </Grid>
    </Card>
  );
}