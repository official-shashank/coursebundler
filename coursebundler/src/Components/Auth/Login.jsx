import {
  Container,
  VStack,
  Heading,
  FormLabel,
  Input,
  Box,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import {Link} from 'react-router-dom'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children={'Welcome To CourseBundler'} />
        <form style={{ width: '100%' }}>
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
            <FormLabel htmlFor="password" children="Password" />
            <Input
              placeholder="Enter your Password"
              id="email"
              value={password}
              required
              onChange={e => setPassword(e.target.value)}
              type="password"
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box>
         <Link to='/forgetpassword'>
         <Button fontSize={'sm'} variant={'link'}>
         Forget Password
       </Button>
         </Link>
          </Box>
          <Button my={'4'} colorScheme='yellow' type='submit'>
          Login
          </Button>
          <Box my={'4'}>
           New User?{' '}
           <Link to='/register'>
           <Button colorScheme='yellow' variant={'link'}>
           Sign Up
           </Button>
         
           
           </Link>
           {' '}here
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
