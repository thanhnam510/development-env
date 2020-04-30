import '../src/index.scss';
import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';

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
});

addDecorator(storyFn => <div style={{ background: '#fff', padding: '20px', }}>{storyFn()}</div>);
