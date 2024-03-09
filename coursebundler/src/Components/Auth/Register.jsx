import {
  Container,
  VStack,
  Heading,
  FormLabel,
  Input,
  Box,

  Button,
  Avatar,
} from '@chakra-ui/react';
import React, { useState, } from 'react';
import { Link } from 'react-router-dom';

 export const fileUploadCss={
    cursor:"pointer",marginLeft:"-5%",width:"110%",border:"none",height:"100%",color:"#ECC94B" ,backgroundColor:"white"
}
const fileUplaodStyle={
    "&::file-selector-button":fileUploadCss
}



const Register = () => {

    const changeImageHandler=(e)=>{
        const file=e.target.files[0];
        const reader=new FileReader();
        reader.readAsDataURL(file);
    
        reader.onloadend=()=>{
            setImagePrev(reader.result);
            setImage(file);
        }
    }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const [image,setImage]=useState('');
  return (
    <Container h={'full'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'4'}>
        <Heading
          textTransform={'uppercase'}
          my={'5'}
          children={'Registeration'}
        />
        <form style={{ width: '100%' }}>
          <Box display={'flex'} justifyContent={'center'}>
            <Avatar src={imagePrev} size={'2xl'} />
          </Box>
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
          <Box marginY={'4'}>
            <FormLabel htmlFor="chooseAvatar" children="choose Avatar" />
            <Input
              placeholder="Enter your Password"
              id="chooseAvatar"
              accept="image/*"
              required
              type={'file'}
              focusBorderColor="yellow.500"
              css={fileUplaodStyle}
              onChange={changeImageHandler}
            />
          </Box>

          <Button my={'4'} colorScheme="yellow" type="submit">
            Sign Up
          </Button>
          <Box my={'4'}>
            Already User?{' '}
            <Link to="/login">
              <Button colorScheme="yellow" variant={'link'}>
                Login
              </Button>
            </Link>{' '}
            here
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
