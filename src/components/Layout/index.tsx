import React from 'react';
import Meta from 'components/Meta';
import Footer from 'components/Footer';

interface IProps {
  preview: boolean;
  children: React.ReactNode;
}

export default function Layout({ preview, children }: IProps) {
  return (
    <>
      <Meta />
      <main>{children}</main>
      <Footer />
    </>
  );
}
