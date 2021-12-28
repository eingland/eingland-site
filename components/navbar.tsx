import { ReactNode } from 'react';
import { Box,
    Flex,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode } from "@chakra-ui/react";
import NextLink from 'next/link'

import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon, DownloadIcon } from '@chakra-ui/icons';

const Links = ['blog'];

const NavLink = ({ children }: { children: ReactNode }) => (
    <NextLink href={'/' + children} passHref>
        <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        textTransform={'capitalize'}
        href={'#'}>
        {children}
        </Link>
    </NextLink>
  );

  export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} mb={2}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
            <NextLink href={'/'} passHref>
                <Link
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.700'),
                }}
                href={'#'}>
                Eric Ingland
                </Link>
            </NextLink>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
              <Menu>
                <Link href="/media/Resume_EricIngland_Web.pdf">
                    <Button
                    variant={'solid'}
                    colorScheme={'blue'}
                    size={'sm'}
                    mr={4}
                    leftIcon={<DownloadIcon />}>
                    Resume
                    </Button>
                </Link>
                <Button onClick={toggleColorMode} m={2}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Menu>
            </Flex>
          </Flex>
  
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
        </>
    );
  }
