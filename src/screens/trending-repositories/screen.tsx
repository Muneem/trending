import React from 'react';
import { useGetTrendingRepositories } from '@hooks/use-get-trending-repositories';
import { RepositoryItem } from '@screens/trending-repositories/components/repository-item';
import { Box, Text } from '@chakra-ui/layout';
import { Progress } from '@chakra-ui/progress';
import { HeaderComponent } from '@components/header-component';

export function TrendingRepositories() {
  const [{ isLoading, hookData, error }] = useGetTrendingRepositories();
  return (
    <Box
      border={'1px solid'}
      borderColor={'#1D262A'}
      w={'100%'}
      borderRadius={'4px'}
      maxH={'800'}
      overflow={'hidden'}>
      <HeaderComponent />
      <Box overflow={'scroll'} h={'650'}>
        {isLoading && <Progress size="xs" isIndeterminate />}
        {hookData?.map((repo, index) => {
          return <RepositoryItem key={repo.rank} repo={repo} />;
        })}
      </Box>
      {error && <Text>Unable to load data </Text>}
    </Box>
  );
}
