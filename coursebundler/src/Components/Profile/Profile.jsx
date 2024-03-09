import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const user = [
    {
      name: 'shashank',
      email: 'abc@gmail.com',
      createdAt: String(new Date().toISOString()),
      role: 'user',
     
    },
  ];
  return (
    <Container minH={'95vh'} maxW={'container.lg'} py={8}>
      <Heading m={8} textTransform={'uppercase'}>
        Profile
      </Heading>
      <Stack
        justifyContent={'flex-start'}
        direction={'column'}
        alignItems={'center'}
        spacing={['8', '16']}
        padding={8}
      >
        <VStack>
          <Avatar boxSize={48} />
          <Button colorScheme="yellow" variant={'ghost'}>
            Change Photo
          </Button>
        </VStack>
        <VStack spacing={4} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text fontWeight={'bold'}>Name</Text>
            <Text>{user[0].name}</Text>
          </HStack>
          <HStack>
            <Text fontWeight={'bold'}>email</Text>
            <Text>{user[0].email}</Text>
          </HStack>
          <HStack>
            <Text children="CreatedAt" fontWeight={'bold'} />
            <Text children={user[0].createdAt.split('T')[0]} />
          </HStack>
          {user.role !== 'admin' && (
            <HStack>
              <Text children="subscription" fontWeight={'bold'} />
              {user.subscription.status === "active" ? (
                <Button>Cancel Subscription</Button>
              ) : (
                
                  <Button>Subscribe</Button>
               
              )}
            </HStack>
          )}
        </VStack>
      </Stack>
    </Container>
  );
};

export default Profile;
