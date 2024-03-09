import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import intro from '../../Assets/videos/intro.mp4'
import {RiSecurePaymentFill} from "react-icons/ri"
import {data} from '../../Assets/docs/termsAndCondition'

import { Link } from 'react-router-dom';
const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar
        src="https://i.pinimg.com/736x/c0/4b/01/c04b017b6b9d1c189e15e6559aeb3ca8.jpg"
        boxSize={['40', '48']}
      />
      <Text children="Co-Founder" opacity={0.7} />
    </VStack>
    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Shashank Vishwakarma" size={['md', 'xl']} />
      <Text children="Hi , i am a full-stack developer and a teacher since last 3 years .i taught hundred of students every year. Our mission is to provide content at reasonable price." />
    </VStack>
  </Stack>
);

const VideoPlayer = () => (
  <Box>
  <video
  autoPlay={true}
  controls controlsList='nodownload nofullscreen noremoteplayback'
  disablePictureInPicture
  disableRemotePlayback
  src={intro}
  muted
  >
  </video>
  </Box>
);

const TandC=({termsAndCondition})=>(
<Box>
<Heading size={"md"} children="Terms & Conditions" textAlign={"center"} my={'4'}/>
<Box h={"sm"} p={"4"} >
<Text textAlign={["center","left"]} letterSpacing={"widest"} fontFamily={"heading"} overflow={"scroll"} h={"300px"}> {termsAndCondition}</Text>

<Heading my={"4"} size={"xs"}  children="Refund only applicable for cancellation within 7 days"/>

</Box>


</Box>

)

const About = () => {
  return (
    <Container
      maxW={'container.lg'}
      padding={'16'}
      boxShadow={'lg'}
      height={'full'}
      marginTop={'60px'}

    >
      <Heading children="About Us" textAlign={['center', 'center']} />
      <Founder />

      <Stack m={'8'} direction={['column', 'row']} alignItems={'center'}>
        <Text fontFamily={'cursive'} m={'8'} textAlign={['center', 'left']}>
          We are video streaming platform with some amazing courses available
          for only premium users.
        </Text>
        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>

      </Stack>
      <VideoPlayer/>

<TandC termsAndCondition={data}/>


      <HStack m={"4"} p={"4"}>
      <RiSecurePaymentFill/>
      <Heading size={"xs"} fontFamily={"sans-serif"} textTransform={"uppercase"} children="Payment is secured by Razorpay"/>
      </HStack>
    </Container>
  );
};

export default About;
