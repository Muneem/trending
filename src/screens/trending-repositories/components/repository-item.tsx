import React, { useState } from 'react';
import { StarIcon } from '@components/icons/star-icon';
import { ForkIcon } from '@components/icons/fork-icon';
import { Box, Flex, Link, Text } from '@chakra-ui/layout';
import { RepoIcon } from '@components/icons/repo-icon';
import { Avatar, Button } from '@chakra-ui/react';
import { RepositoriesData } from '../../../utils/types';

interface RepositoryItemProp {
  repo: RepositoriesData;
}

export function RepositoryItem(props: RepositoryItemProp) {
  const { repo } = props;
  const {
    repositoryName,
    url,
    description,
    language = '',
    forks,
    starsSince,
    totalStars,
    username,
    builtBy = [],
  } = repo;

  const [isStared, setIsStared] = useState(false);

  return (
    <Box
      py={'12px'}
      px={'16px'}
      borderBottom={'1px solid'}
      borderColor={'#1D262A'}
    >
      <Flex justifyContent={'space-between'}>
        <Box flex={1} pr={'12px'}>
          <Flex alignItems={'center'}>
            <RepoIcon />
            <Link
              _focus={{}}
              fontSize={'20px'}
              color = {'#58a6ff'}
              mb={'4px'}
              ml={'5px'}
              href={url}
              isExternal
            >
              {username}/<strong>{repositoryName}</strong>
            </Link>
          </Flex>
          <Text color={'#8b949e'} fontSize={'14px'}>{description}</Text>
        </Box>
        <Button
          variant={'outline'}
          borderColor={'#30363d'}
          _active={{}}
          _focus={{}}
          _hover={{borderColor: '#8b949e'}}
          onClick={() => setIsStared(!isStared)}
        >
          <Flex alignItems={'center'} fontSize={'12px'}>
            {
              isStared ?
                <>
                <Box mr={'8px'}>
                  <StarIcon type={ 'filled' } />
                </Box>
                <Text>Unstar</Text>
                </>
                :
                <>
                  <Box mr={ '8px' }>
                    <StarIcon type={'empty'} />
                  </Box>
                  <Text>Star</Text>
                </>
            }
          </Flex>
        </Button>
      </Flex>
      <Flex
        mt={'8px'}
        alignItems={'center'}
        justifyContent={'space-between'}
        color={'#8B949E'}
        fontSize={'12px'}
      >
        <Flex alignItems={'center'}>
          <Box mr={'16px'}>{language}</Box>
          <Flex mr={'16px'} alignItems={'center'}>
            <StarIcon />
            <Box ml={'4px'}>{totalStars}</Box>
          </Flex>

          <Flex mr={'16px'} alignItems={'center'}>
            <ForkIcon />
            <Text ml={'4px'}>{forks}</Text>
          </Flex>
          <Flex mr={'16px'} alignItems={'center'}>
            <Box mr={'8px'}>Built by</Box>
            {builtBy.map((user) => (
              <Link key={user.url} href={user.url}>
                <Avatar
                  src={user.avatar}
                  height='20px'
                  width='20px'
                  alt={`user Image`}
                  borderRadius={'50%'}
                  mr={'4px'}
                />
              </Link>
            ))}
          </Flex>
        </Flex>
        <Flex alignItems={'center'} fontSize={'12px'}>
          <Box mr={'4px'}>
            <StarIcon />
          </Box>
          <Text color={'38B949E'}>{starsSince} stars today</Text>
        </Flex>
      </Flex>
    </Box>
  );
}
