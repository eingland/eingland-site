import { Button, Link, useColorMode } from "@chakra-ui/react";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <div >
            <Link color='blue.500' href="/" m={2}>Home</Link>
            <Link color='blue.500' href="/blog" m={2}>Blog</Link>
            <Button onClick={toggleColorMode} m={2}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
        </div>
    );
};

export default Navbar;
