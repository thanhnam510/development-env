import React from 'react';
import { storiesOf } from '@storybook/react';

const Button: React.FC = (props) => <button>{props.children}</button>;

storiesOf('Components|atoms/Button', module).add('default', () => (
  <Button>
    <div>Test</div>
  </Button>
));
