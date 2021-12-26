import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { Button, Heading, HStack, Link, Text } from "@chakra-ui/react";
import {FaLinkedin, FaGithub, FaEnvelope} from "react-icons/fa"

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Heading>
          Hi, I&apos;m a <i>DevOps Engineer</i>.
        </Heading>
        <Text>
          I work with clients to provide IT infrastructure support (Azure, AWS,
          Linux, Windows) with over 7 years of experience. I have a background
          in DevOps, web applications, databases, and IT Support.
        </Text>

        <Text>
          Please contact me on{" "}
          <Link  href="http://linkedin.com/in/ericingland" >LinkedIn</Link> or by{" "}
          <Link  href="mailto:ingland.eric@gmail.com">Email</Link>.
        </Text>
        <Text>
          I have personal development projects on{" "}
          <Link  href="http://github.com/eingland">Github</Link>.
        </Text>

        <Heading as='h2' p={2} size='md'>On the web</Heading>

        <HStack>
          <Link href="http://linkedin.com/in/ericingland"> 
            <Button colorScheme='linkedin' leftIcon={<FaLinkedin />}>
              Linkedin
            </Button>
          </Link>
          <Link href="mailto:ingland.eric@gmail.com">
            <Button colorScheme='blue' leftIcon={<FaEnvelope />}>
              Email
            </Button>
          </Link>
          <Link href="http://github.com/eingland">
            <Button colorScheme='gray' leftIcon={<FaGithub />}>
                Github
            </Button>
          </Link>
        </HStack>
      </section>
    </Layout>
  );
}
