import {
  styled
} from '@linaria/react';
import { h } from 'preact';

import { css } from '@linaria/core';

const cls = css`
color: aliceblue;
border: 1px solid green;
`;
const H1 = styled.p`
  color: tomato;
  font-size: 96px;
`;

const Home = () => (
  <div className={cls}>
    <p>This? is the Home component.</p>
    <H1>Home</H1>
  </div>
);

export default Home;
