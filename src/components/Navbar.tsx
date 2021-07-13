import { Box, Button, Flex } from '@chakra-ui/react';
import React from 'react';
interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = ({}) => {
    return (
      <Flex bg='#dcdcde' padding={4} justifyContent='space-between'>
        <Box>
          Hello Logo
        </Box>
        <Box bg='white' border='1px black solid' h='24px' w='350px' ></Box>
        <Flex w='10%' justifyContent='space-evenly'>
          <Box>Login</Box>
          <Box>Register</Box>
        </Flex>
      </Flex>
    );
}

export default Navbar;