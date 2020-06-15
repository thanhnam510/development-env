import React from 'react';
import { Helmet } from 'react-helmet';
import { BasePageProps } from 'component';

export const Dash: React.FC<BasePageProps> = () => (
  <>
    <Helmet>
      <title>Dash</title>
    </Helmet>
    <h1>Dash</h1>
    <p>Hello Worrld Dash!</p>
  </>
);
