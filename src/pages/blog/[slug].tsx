import React from 'react';
import Comments from '../../components/comments';
import ErrorPage from 'next/error';
import Form from '../../components/form';
import Head from 'next/head';
import MoreStories from '../../components/more-stories';
import PostBody from '../../components/post-body';
import PostHeader from '../../components/post-header';
import PostTitle from '../../components/post-title';
import SectionSeparator from '../../components/section-separator';
import { CMS_NAME } from '../../lib/constants';
import { Container } from 'react-awesome-styled-grid';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import { useRouter } from 'next/router';
import Layout from 'components/Layout';
import { TPost } from 'types/blog';

interface IProps {
  post: TPost;
  morePosts: TPost[];
  preview: boolean;
}

export default function Post({ post, morePosts, preview }: IProps) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.body} />
            </article>

            <Comments comments={post.comments} />
            <Form _id={post._id} />

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({
  params,
  preview = false
}: {
  params: { slug: string };
  preview: boolean;
}) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null
    },
    revalidate: 1
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post: TPost) => ({
        params: {
          slug: post.slug
        }
      })) || [],
    fallback: true
  };
}
