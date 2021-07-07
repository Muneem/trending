import { DeveloperItem } from '@screens/trending-developers/components/developer-item';
import React from 'react';
import { Box, Text } from '@chakra-ui/layout';
import { Progress } from '@chakra-ui/progress';
import { HeaderComponent } from '@components/header-component';
import { useGetTrendingDevelopers } from '@hooks/use-get-trending-developers';

export function TrendingDevelopers() {
  const [{ isLoading, hookData, error }] = useGetTrendingDevelopers();
  return (
    <Box
      border={'1px solid'}
      borderColor={'#1D262A'}
      borderRadius={'4px'}
      maxH={'700px'}
      overflow={'hidden'}
    >
      <HeaderComponent />
      <Box overflow={'scroll'} h={'620px'} >
        {isLoading && <Progress size="xs" isIndeterminate />}
        {hookData?.map((developer, index) => {
          return (
            <DeveloperItem
              key={developer.rank}
              data={developer}
            />
          );
        })}
      </Box>
      {error && <Text>Unable to load data </Text>}
    </Box>
  );
}
