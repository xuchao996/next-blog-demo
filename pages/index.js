import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/post';
import Link from 'next/link';
export default function Home({posts}) {
  return (
    <Layout home>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map(({id, date, title}) => (
            <Link href={`/posts/${id}`}>
              <li className={utilStyles.listItem} key={id}>
                <p className={utilStyles.lightText}>{id} - {title}</p>
                <span>{date}</span>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {posts}
  }
}

// export async function getServerSideProps(context) {
//   console.log("context", context.query)
//   const posts = getSortedPostsData();
//   return {
//     props: {posts}
//   }
// }