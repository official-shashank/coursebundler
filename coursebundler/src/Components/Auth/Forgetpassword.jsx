import { Container, Heading, VStack,Button,Input } from '@chakra-ui/react'
import React, { useState } from 'react'

const Forgetpassword = () => {
    const [email,setEmail]=useState('');
  return (
    <Container py={'16'} h={'88vh'}>
    <form>
    <Heading children="Forget Your Password" my={'16'}  textAlign={["center","left"]}/>
    
    <VStack spacing={'8'}>
    <Input
    placeholder="Enter email"
    id="email"
    value={email}
    required
    onChange={e => setEmail(e.target.value)}
    type="email"
    focusBorderColor="yellow.500"
  />
  <Button my={'4'} colorScheme='yellow' type='submit' width={'full'}>
Send Forget Link
  </Button>

    </VStack>
    
    </form>
    
    </Container>
  )
}

export default Forgetpassword