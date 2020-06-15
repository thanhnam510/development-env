import '../src/index.scss';
import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addParameters({
  viewport: {
    viewports: {
      smallmobile: {
        name: 'Small mobile',
        styles: {
          width: '375px',
          height: '667px',
        },
      },
      largemobile: {
        name: 'Large Mobile',
        styles: {
          width: '414px',
          height: '896px',
        },
      },
      tablet: {
        name: 'Tablet',
        styles: {
          width: '834px',
          height: '1112px',
        },
      },
    },
  },
  backgrounds: [
    { name: 'dark', value: '#333333', default: true },
    { name: 'grey', value: '#e0e0e0' },
    { name: 'light', value: '#ffffff' },
  ],
});

addDecorator((storyFn) => <div style={{ margin: '20px 20px 40px', }}>{storyFn()}</div>);
addDecorator(
  withInfo({
    header: false,
    inline: true,
    source: true,
    styles: {
      infoBody: {
        backgroundColor: '#eeeeee',
      },
      source: {
        h1: {
          color: '#6453ec',
        },
      },
    },
  })
);
