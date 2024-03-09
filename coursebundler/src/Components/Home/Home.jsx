import React from 'react';
import { Heading, Stack, VStack ,Text, Button, Image, Box, HStack} from '@chakra-ui/react';
import './Home.css';
import { Link } from 'react-router-dom';
import vg from '../../Assets/images/bg.png'
import {CgGoogle,CgYoutube}from 'react-icons/cg'
import {SiCoursera,SiUdemy}from 'react-icons/si'
import {DiAws} from 'react-icons/di'
import intro from '../../Assets/videos/intro.mp4'
const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack width={'full'} alignItems={["center","flex-end"]}>
            <Heading children="Learn from experts" size={'2xl'}/>
            <Text children="find vaueable content at reasonable price"/>

            <Link to="/courses">
            </Link>
                <Button size={'lg'} colorScheme='yellow'>
                Explore Now</Button>
          </VStack>
          <Image boxSize={'md'} src={vg} objectFit={'contain'} className='vector-graphics'/>
        </Stack>
      </div>
      <Box padding={"8"} bg={'blackAlpha.800'} >
      <Heading textAlign={"center"} fontFamily={"body"} color={'yellow.400'} children='OUR BRANDS'/>
      <HStack className='brandsBanner' justifyContent={'space-evenly'} marginTop={'5'}>
      <CgGoogle/>
      <CgYoutube/>
      <SiCoursera/>
      <SiUdemy/>
      <DiAws/>
      </HStack>

      </Box>
      <div className='container2'>
      <video
      autoPlay={true}
      controls controlsList='nodownload nofullscreen noremoteplayback'
      disablePictureInPicture
      disableRemotePlayback
      src={intro}
      >
      </video>
      
      </div>
    </section>
  );
};

export default Home;
