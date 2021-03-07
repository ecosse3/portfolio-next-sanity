import styled from 'styled-components';
import { config } from 'react-awesome-styled-grid';

export const Container = styled.header`
  margin-bottom: ${props => props.theme.constants.header.mobile}px;

  ${props => config(props).media.sm`
    margin-bottom: ${props => props.theme.constants.header.desktop}px;
  `}
`
