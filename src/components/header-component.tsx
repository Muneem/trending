import React  from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {  Flex, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { TrendingOptionsProps } from '../utils/types';

const TrendingOptions = (props: TrendingOptionsProps) => {
  const { showDevData = false } = props;
  return (
    <Flex>
        <Link
          href={{
            pathname: '/[slug]',
            query: { slug: 'repos' },
          }}
          replace
          scroll={false}
        >
          <Button
            fontSize={'14px'}
            _hover={{ }}
            bg={!showDevData ? '#186ce9': 'unset'}
            borderColor={!showDevData ? '#295fa8': '#c9d1d9'}
            border={'1px solid'}
            variant={'outline'}
            borderTopRightRadius={'unset'}
            borderBottomRightRadius={'unset'}>
            Repositories
          </Button>
        </Link>

        <Link
          href={{
            pathname: '/[slug]',
            query: { slug: 'devs' },
          }}
          replace
          scroll={false}
        >
          <Button
            fontSize={'14px'}
            _hover={{ }}
            bg={showDevData ? '#186ce9': 'unset'}
            borderColor={showDevData ? '#295fa8': '#c9d1d9'}
            variant={'outline'}
            borderTopLeftRadius={'unset'}
            borderBottomLeftRadius={'unset'}>
            Developers
          </Button>
        </Link>
    </Flex>
  );
};

const TrendingFilters = () => {
  return (
    <Flex
      justifyContent={'space-between'}
      alignItems={'center'}
      color={"#8B949E"}
      fontSize={'14px'}
    >
      <Text mr={'24px'}>
        Language: Any
      </Text>
      <Text>
        Date Range: Today
      </Text>
    </Flex>
  )
}

export function HeaderComponent() {
  const { query } = useRouter();
  const { slug } = query;
  const isDevs = slug === 'devs';
  return (
    <Flex
      borderBottom={'1px solid #1D262A'}
      bg={'#1C2225'}
      p={'16px'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <TrendingOptions showDevData={isDevs} />
      <TrendingFilters />
    </Flex>
  );
}
