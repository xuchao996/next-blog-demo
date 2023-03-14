import Layout from "../../components/layout"
import { getAllPostIds, getBlogById } from '../../lib/post';
import Head from 'next/head';
export default function Post(props) {
    return (
        <Layout>
            <Head>
                <title>{props.post.title}</title>
            </Head>
            <h1>Post</h1>
            <p>
                {props.post.id}
            </p>
            <p>
                {props.post.title}
            </p>
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
    console.log("post", post)
    return {
        props: {
            post: post
        }
    }
}