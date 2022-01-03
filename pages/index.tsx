import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import Link from 'next/link'
import Date from '../components/date'
import { PostData } from '../interfaces'

import { getStoredPostsData } from '../lib/posts'
import { GetStaticProps, GetStaticPropsContext } from 'next'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>…</Head>
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, content }) => (
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


export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getStoredPostsData()
  return {
    props: {
      allPostsData
    }
  }
}