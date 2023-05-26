'use client'
import { FlightOffer } from '@/types/types';
import { getCarrierCode, getDepartureCode, getDuration, getFlightNumber } from '@/utils/utils';
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

  const offers = data.map((item) => (
    <Card shadow="xs" style={{ maxWidth: '100%', padding: '0 1rem 1rem 1rem', marginBottom: '1rem'}} key={item.id}>
    <Title>
      <Text style={{ marginTop: '0.5rem', fontWeight: 'bold', fontSize: '2rem', zIndex: 100 }}>
        {item.price.total} $
      </Text>
    </Title>
  <Grid gutter="lg">
    <Col span={3}>
      <Text weight={500}>Departure</Text>
      <Text>{getDepartureCode(item)}</Text>
      <Text weight={500}>12:35 PM</Text>
    </Col>
    <Col span={3}>
      <Text weight={500}>Arrival</Text>
      <Text>SIN</Text>
      <Text weight={500}>6:55 PM</Text>
    </Col>
    <Col span={3}>
      <Text weight={500}>Duration</Text>
      <Text>{getDuration(item)}</Text>
    </Col>
    <Col span={3}>
      <Text weight={500}>Airline</Text>
      <Text>{getCarrierCode(item)}</Text>
      <Text weight={500}>Flight No.</Text>
      <Text>{getFlightNumber(item)}</Text>
    </Col>
  </Grid>
</Card>
  ))


  return (
    <div>
    {offers}
    </div>
  );
}