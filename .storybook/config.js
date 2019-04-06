import '@storybook/addon-console';
import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';

addParameters({ viewport: {
  defaultViewport: 'responsive',
} });

const req = require.context('../src/stories', true, /\.stories\.jsx$/);

// addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// function loadStories() {
//   require('../src/components');
// }
configure(loadStories, module);


// configure(loadStories, module);
