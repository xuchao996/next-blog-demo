import Layout from "../../components/layout"
import { getAllPostIds, getBlogById } from '../../lib/post';
import Head from 'next/head';
export default function Post(props) {
    return (
        <Layout>
            <Head>
                <title>{props.post.title}</title>
            </Head>
            {/* <p>
                {props.post.id}
            </p> */}
            <h2>
                {/* <span>{props.post.id}</span> /  */}
                {props.post.title}
            </h2>
            <p>
                {props.post.date}
            </p>
            <div className="blog-content" dangerouslySetInnerHTML={{ __html: props.post.contentHtml }}></div>
        </Layout>
    )
}

export function getStaticPaths() {
    const list = getAllPostIds();
    return {
        paths: list.map(item => { return { params: item } }),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const post = await getBlogById(params.id);
    return {
        props: {
            post: post
        }
    }
}