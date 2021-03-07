import React from 'react';
import Meta from 'components/Meta';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { Container } from 'react-awesome-styled-grid';

interface IProps {
  preview: boolean;
  children: React.ReactNode;
}

export default function Layout({ preview, children }: IProps) {
  return (
    <>
      <Meta />
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
}
