import {
  Box,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
  Button,
  Textarea,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message,setMessage]=useState('');
  return (
    <Container h={'92vh'} display={'flex'} justifyContent={'center'} alignItems={"center"} >
      <VStack width={'full'}>
        <Heading children="Contact Us" />

        <form style={{ width: '100%' }}>
          <Box marginY={'4'}>
            <FormLabel htmlFor="email" children="Enter Name" />
            <Input
              placeholder="abc"
              id="name"
              value={name}
              required
              onChange={e => setName(e.target.value)}
              type="text"
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box marginY={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              placeholder="Enter email"
              id="email"
              value={email}
              required
              onChange={e => setEmail(e.target.value)}
              type="email"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box marginY={'4'}>
          <FormLabel htmlFor="message" children="Message" />
          <Textarea
            placeholder="Write message here....."
            id="message"
            value={message}
            required
            onChange={e => setMessage(e.target.value)}
            type="text"
            focusBorderColor="yellow.500"
          />
        </Box>

        
          <Button my={'4'} colorScheme="yellow" type="submit">
          Message me
          </Button>
          <Box my={'4'}>
           Request a course?{' '}
           <Link to='/request'>
           <Button colorScheme='yellow' variant={'link'}>
           Click
           </Button>
         
           
           </Link>
           {' '}here
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Contact;
