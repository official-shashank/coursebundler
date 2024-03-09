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
  
  const Request = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [course,setCourse]=useState('');
    return (
      <Container h={'92vh'} display={'flex'} justifyContent={'center'} alignItems={"center"} >
        <VStack width={'full'}>
          <Heading children="Request New Course" />
  
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
            <FormLabel htmlFor="course" children="Course" />
            <Textarea
              placeholder="Explain course here..."
              id="course"
              value={course}
              required
              onChange={e => setCourse(e.target.value)}
              type="text"
              focusBorderColor="yellow.500"
            />
          </Box>
  
          
            <Button my={'4'} colorScheme="yellow" type="submit">
            Message me
            </Button>
            <Box my={'4'}>
             Available Courses?{' '}
             <Link to='/courses'>
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
  
  export default Request;
  