import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import { Heading, Link } from "@chakra-ui/react";
import Navbar from "./navbar";
import NextLink from 'next/link'
import { motion } from "framer-motion";

const name = "Eric Ingland";
export const siteTitle = "Eric Ingland - DevOps Engineer";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
}

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Personal blog site made using next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={184}
              width={184}
              alt={name}
            />
            <Heading className={utilStyles.heading2Xl}>{name}</Heading>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <Heading as="h2" className={utilStyles.headingLg}>
              {name}
            </Heading>
          </>
        )}
      </header>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <main>{children}</main>
      </motion.div>
      {!home && (
        <div className={styles.backToHome}>
          <NextLink href={'/'} passHref>
            <Link>
              ← Back to home
            </Link>
          </NextLink>
        </div>
      )}
    </div>
  );
}
