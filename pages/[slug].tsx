import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { TrendingDevelopers } from '@screens/trending-developers/screen';
import { TrendingRepositories } from '@screens/trending-repositories/screen';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';

export default function TrendingPage() {
  const { query } = useRouter();
  const { slug } = query;
  const isRepos = slug === 'repos';
  const title = <title>{isRepos ? 'Trending Repositories': 'Trending Developers' }</title>;
  const text = <Text color={'#8B949E'}>{isRepos ? 'See what the GitHub community is most excited about today.': 'These are the develops building the hot tools toda'}</Text>

  return (
    <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'} bg={'#0d0e15'} h={'100vh'} color={'#fff'}>
      <Head>
        {title}
      </Head>
      <Box mb={'40px'} pb={'40px'} borderBottom={'2px solid #1C2225'} w={'100%'} textAlign={'center'}>
          <Heading size={'xl'} mt={'24px'} color={'#C9D1D9'}>
            Trending
          </Heading>
          {text}
      </Box>
      <Box w={'980px'}>
          {isRepos ? <TrendingRepositories /> : <TrendingDevelopers />}
      </Box>
    </Flex>
  );
}

