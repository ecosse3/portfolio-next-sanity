import React from 'react';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Layout from '../components/Layout';
import { getAllPostsForHome } from '../lib/api';
import Head from 'next/head';
import { TPost } from 'types/blog';
import { GetStaticProps } from 'next';
import { Container } from 'react-awesome-styled-grid';
import Intro from 'components/intro';

interface IProps {
  allPosts: TPost[];
  preview: boolean;
}

export default function Index({ allPosts, preview }: IProps) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Kvsky Portfolio</title>
        </Head>
        <Intro />
        <Container>
          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts: TPost[] = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
    revalidate: 1
  };
};
