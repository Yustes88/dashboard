'use client'
import {  Container, Title, Text, Button } from '@mantine/core';
import { useStyles } from './styles';
import { Buttons } from '../buttons/Button';



export function Header() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Explore{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
              >
                the world
              </Text>{' '}
              together
            </Title>

            <Text className={classes.description} mt={30}>
              Build fully functional accessible web applications with ease – Mantine includes more
              than 100 customizable components and hooks to cover you in any situation
            </Text>

            <Buttons text='Start' type='button'/>
          </div>
        </div>
      </Container>
    </div>
  );
}