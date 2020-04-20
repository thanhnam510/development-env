import React from 'react';

interface Props {
  children: React.ReactChild
}

const Html: React.FC<Props> = props => (
  <html>
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>AEONCARD</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
      <div id="app">
        {props.children}
      </div>
    </body> 
  </html>
);

export default Html;
