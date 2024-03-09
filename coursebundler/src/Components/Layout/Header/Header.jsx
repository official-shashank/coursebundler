import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill, RiProfileFill } from 'react-icons/ri';

import LinkButton from './LinkButton';
import { Link } from 'react-router-dom';
const Header = () => {

  const logOutHandlder = () => {
    console.log('logout');
  }
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isAuthenticated = false;
  const user = {
    role: "admin",
  }
  return (
    <>
      <ColorModeSwitcher />
      <Button
        zIndex={"overlay"}
        colorScheme="yellow"
        width={'12'}
        height={'12'}
        rounded={'full'}
        position={'fixed'}
        top={'6'}
        left={'6'}
        onClick={onOpen}
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={'blur(3px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>COURSE BUNDLER</DrawerHeader>
          <DrawerBody>
            <VStack>
              <LinkButton url={'/'} title={'Home'} close={onClose} />
              <LinkButton url={'/courses'} title={'Browse All Courses'} close={onClose} />
              <LinkButton url={'/request'} title={'Request a Course'} close={onClose} />
              <LinkButton url={'/about'} title={'About Us'} close={onClose} />
              <LinkButton url={'/contact'} title={'Contact Us'} close={onClose} />
            </VStack>
            <HStack
              justifyContent={'space-evenly'}
              position={'absolute'}
              bottom="2rem"
              width={'80%'}
            >
              {isAuthenticated ? (
                <>
                  <VStack>
                    <HStack>
                      <Link to={'/profile'} >
                        <Button variant={'ghost'} colorScheme="yellow" onClick={onClose}>
                          <RiProfileFill /> Profile
                        </Button>
                      </Link>
                      <Button variant={'ghost'} onClick={logOutHandlder} >
                        <RiLogoutBoxLine />
                        LogOut
                      </Button>
                    </HStack>

                    {
                      user && user.role === "admin" && <Link to={'/admin/dashboard'}>
                        <Button colorScheme='purple' variant={'ghost'}> <RiDashboardFill style={{ margin: "4px" }} /> Dashboard</Button>
                      </Link>
                    }

                  </VStack>
                </>
              ) : (
                <>
                  <Link to={'/login'} onClick={onClose}>
                    <Button colorScheme="yellow">Login</Button>
                  </Link>
                  <p>OR</p>
                  <Link to={'/register'} onClick={onClose}>
                    <Button colorScheme="yellow">Sign Up</Button>
                  </Link>
                </>
              )}
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
