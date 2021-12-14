import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home ({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Hi, I'm Eric Ingland!</h1>
        <p>I'm a <b>DevOps Engineer</b>.
              I love all things computer science.
              Please have a look at my projects on <a href="http://github.com/eingland">Github</a>.</p>
        <p>Contact me at <a href="http://twitter.com/ericingland">@ericingland</a> or by <a href="mailto:ingland.eric@gmail.com">email</a>.</p>
        <ul style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <li className="nav-link">
            <a href="http://github.com/eingland">
              <FontAwesomeIcon icon={['fab', 'github']} style={{ color: '#000000' }} />
            </a>
          </li>
          <li className="nav-link">
            <a href="mailto:ingland.eric@gmail.com">
              <FontAwesomeIcon icon="envelope" style={{ color: '#000000' }} />
            </a>
          </li>
          <li className="nav-link">
            <a href="http://twitter.com/ericingland">
              <FontAwesomeIcon icon={['fab', 'twitter']} style={{ color: '#000000' }} />
            </a>
          </li>
          <li className="nav-link">
            <a href="http://linkedin.com/in/ericingland">
              <FontAwesomeIcon icon={['fab', 'linkedin']} style={{ color: '#000000' }} />
            </a>
          </li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
