import { CMS_NAME, CMS_URL } from '../lib/constants';
import styled from 'styled-components';
import { Col, Row } from 'react-awesome-styled-grid';
import React from 'react';
import Image from 'next/image';

const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.gilroy};
  font-size: 28px;
`;

export default function Intro() {
  return (
    <section>
      <Row>
        <Col>
          <Title>Kvsky</Title>
        </Col>
      </Row>
    </section>
  );
}
