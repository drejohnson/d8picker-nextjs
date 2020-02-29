import React, { useEffect } from 'react';
import Head from 'next/head';
import { Heading, Flex, Grid, Image } from '@chakra-ui/core';
import Layout from '../components/Layout';
import LoginButton from '../components/LoginButton';

const Welcome = () => {
  return (
    <Layout>
      <Head>
        <title>Welcome - D8Picker</title>
      </Head>
      <Flex
        direction="column"
        justify="center"
        align="center"
        backgroundColor="#ebf1f1"
        h="100%"
        p="2rem"
      >
        <Grid
          width="100%"
          gap={2}
          alignItems="center"
          justifyContent="center"
          templateColumns="repeat(auto-fit, minmax(349px, 1fr))"
        >
          <Flex
            order={[2, 1]}
            direction="column"
            justify="center"
            align="center"
          >
            <Heading
              as="h1"
              fontSize={['4xl', '5xl']}
              textAlign="center"
              fontWeight={700}
              mb={4}
            >
              When you need more control and flexiblity.
            </Heading>
            <Heading as="h2" textAlign="center" mb={4} fontWeight={300}>
              D8Picker helps you schedule aperiodic events with ease.
            </Heading>
            <LoginButton />
          </Flex>
          <Flex
            order={[1, 2]}
            direction="column"
            justify="center"
            align="center"
          >
            <Image src="/undraw_calendar_dutt.svg" />
          </Flex>
        </Grid>
      </Flex>
    </Layout>
  );
};

export default Welcome;
