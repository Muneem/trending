import React, { useState } from 'react';
import { FlameIcon } from '@components/icons/flame-icon';
import { RepoIcon } from '@components/icons/repo-icon';
import { HeartIcon } from '@components/icons/heart-icon';
import { Box, Flex, Link, Text, HStack } from '@chakra-ui/layout';
import { Avatar, Button } from '@chakra-ui/react';
import { DevelopersData } from '../../../utils/types';


interface DeveloperItemProps {
  data: DevelopersData
}

export function DeveloperItem(props: DeveloperItemProps) {
  const {data} = props;
  const { rank, avatar = '', name, username, url, popularRepository } = data;
  const { repositoryName, url: repoUrl, description } = popularRepository ?? {};

  const [isSponsored, setIsSponsored] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <HStack
      p={'16px'}
      borderBottom={'1px solid'}
      borderColor={'#1D262A'}
      alignItems={'center'}
      spacing={'12px'}
    >
      <Flex flex={1}>
        <Text fontSize={'12px'} color={'#8b949e'} mr='16px'>{rank}</Text>
        <Flex
          alignItems={'center'}>
          <Avatar
            mr={'16px'}
            src={avatar}
            height='50px'
            width='50px'
            alt={`user avatar`}
          />
          <Box>
            <Link
              fontSize={'20px'}
              color={'#58a6ff'}
              href={url}
              isExternal
            >
              {name}
            </Link>
            <Box>
              <Link
                _hover={{color: '#58a6ff', textDecoration: 'underline'}}
                href={url}
                isExternal
              >
                {username}
              </Link>
            </Box>
          </Box>
        </Flex>
      </Flex>
      <Box flex={1}>
        <Flex alignItems={'center'} mb={'4px'}>
          <FlameIcon style={{ color: '#DB6E27', marginRight: '4px' }} />
          <Text color={'#7D848C'} fontSize={'12px'}>POPULAR REPO</Text>
        </Flex>
        <Flex alignItems={'center'} mb={'4px'}>
          <RepoIcon />
          <Link color={'#58a6ff'} href={repoUrl} isExternal _focus={{}} ml={'4px'}>
            <strong>{repositoryName}</strong>
          </Link>
        </Flex>
        <Text color={'#7D848C'} fontSize={'12px'}>{description}</Text>
      </Box>
      <Flex flex={1} alignItems={'center'} justifyContent={'flex-end'}>
        <Button
          variant={'outline'}
          borderColor={'#30363d'}
          _active={{}}
          _focus={{}}
          _hover={{borderColor: '#8b949e'}}
          mr={'8px'}
          onClick={() => setIsSponsored((prevSponsor) => !prevSponsor)}
        >
          <Flex alignItems={'center'}>
            {!isSponsored && <HeartIcon style={{ color: '#DB61A2', marginRight: '8px' }} />}
            {isSponsored ? 'Sponsored' : 'Sponsor'}
          </Flex>
        </Button>
        <Button
          borderColor={'#30363d'}
          _active={{}}
          _focus={{}}
          _hover={{borderColor: '#8b949e'}}
          variant={'outline'}
          onClick={() => setIsFollowed((prevSponsor) => !prevSponsor)}>
          {isFollowed ? 'Followed' : 'Follow'}
        </Button>
      </Flex>
    </HStack>
  );
}
