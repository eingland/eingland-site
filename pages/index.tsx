import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { Link, Text } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>
          Hi, I&apos;m a <b>DevOps Engineer</b>.
        </h1>
        <Text>
          I work with clients to provide IT infrastructure support (Azure, AWS,
          Linux, Windows) with over 7 years of experience. I have a background
          in DevOps, web applications, databases, and IT Support.
        </Text>

        <Text>
          Please contact me on{" "}
          <Link color='blue.500' href="http://linkedin.com/in/ericingland" >LinkedIn</Link> or by{" "}
          <Link color='blue.500' href="mailto:ingland.eric@gmail.com">Email</Link>.
        </Text>
        <Text>
          I have personal development projects on my{" "}
          <Link color='blue.500' href="http://github.com/eingland">Github</Link>.
        </Text>

        <ul className={utilStyles.socialsNav}>
          <li className={utilStyles.socialsNavLink}>
            <Link href="http://linkedin.com/in/ericingland">
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                style={{ color: "#000000" }}
              />
            </Link>
          </li>
          <li className={utilStyles.socialsNavLink}>
            <Link href="mailto:ingland.eric@gmail.com">
              <FontAwesomeIcon icon="envelope" style={{ color: "#000000" }} />
            </Link>
          </li>
          <li className={utilStyles.socialsNavLink}>
            <Link href="http://github.com/eingland">
              <FontAwesomeIcon
                icon={["fab", "github"]}
                style={{ color: "#000000" }}
              />
            </Link>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
