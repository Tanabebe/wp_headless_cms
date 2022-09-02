import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allPosts: { edges }, preview }) {
  // edges　= 全投稿記事
  // 最新記事のデータ
  const latestArticlePost = edges[0]?.node
  // 上記以降の記事データ
  const morePosts = edges.slice(1)

  return (
    <Layout preview={preview}>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <Container>
        <Intro />
        {/* 最新記事データがあれば表示（多分表示されないことない） */}
        {latestArticlePost && (
          <HeroPost
            title={latestArticlePost.title}
            coverImage={latestArticlePost.featuredImage}
            date={latestArticlePost.date}
            author={latestArticlePost.author}
            slug={latestArticlePost.slug}
            excerpt={latestArticlePost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
