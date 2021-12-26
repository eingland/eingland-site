import { Button, Link, useColorMode } from "@chakra-ui/react";
import NextLink from 'next/link'

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <div >
            <NextLink href={'/'} passHref>
                <Link m={2}>Home</Link>
            </NextLink>
            <NextLink href={'/blog'} passHref>
                <Link m={2}>Blog</Link>
            </NextLink>
            <Button onClick={toggleColorMode} m={2}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
        </div>
    );
};

export default Navbar;
