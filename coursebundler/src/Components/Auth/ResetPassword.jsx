import React, { useState } from 'react'
import { Container, Heading, VStack,Button,Input } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';


const ResetPassword = () => {
    const [password,setPassword]=useState('');
    const [cpassword,csetPassword]=useState('');
    const params=useParams();
  return (
    <Container py={'16'} h={'75vh'}>
    <form>
    <Heading children="Reset Password" my={'16'}  textAlign={["center","left"]}/>
    
    <VStack spacing={'8'}>
    <Input
    placeholder="New Password"
    value={password}
    required
    onChange={e => setPassword(e.target.value)}
    type="password"
    focusBorderColor="yellow.500"
  />
    <Input
    placeholder="Confirm New Password"
    value={cpassword}
    required
    onChange={e => csetPassword(e.target.value)}
    type="password"
    focusBorderColor="yellow.500"
  />
  <Button my={'4'} colorScheme='yellow' type='submit' width={'full'}>
Update Password
  </Button>

    </VStack>
    
    </form>
    
    </Container>
  )
}

export default ResetPassword