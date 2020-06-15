import React from 'react';
import { Helmet } from 'react-helmet';
import { BasePageProps } from 'component';

export const About: React.FC<BasePageProps> = () => (
  <>
    <Helmet>
      <title>About</title>
    </Helmet>
    <h1>About</h1>
    <p>Hello Worrld About!</p>
  </>
);
