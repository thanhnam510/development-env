import React from 'react';
import { Link } from '@reach/router';
import { Helmet } from 'react-helmet';
import { BasePageProps } from 'component';
export const Home: React.FC<BasePageProps> = () => (
  <>
    <Helmet>
      <title>This is the Home Page title!</title>
    </Helmet>
    <h1>Home</h1>
    <p>Hello Worrld!</p>
    <ul>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        <Link to="dash">Dash</Link>
      </li>
    </ul>
  </>
);
