import { Box, Button, Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = ({ }) => {
  return (
    <Flex bg='#dcdcde' padding={4} justifyContent='space-between'>
      <Box>
        Hello Logo
      </Box>
      <Box bg='white' border='1px black solid' h='24px' w='350px' ></Box>
      <Flex w='10%' justifyContent='space-evenly'>
        <NextLink href='/login'>
          <Link>
            Login
          </Link>
        </NextLink>
        <NextLink href='/register'>
          <Link>
            Register
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  );
}

export default Navbar;