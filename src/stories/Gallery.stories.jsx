import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withKnobs, text, optionsKnob as options } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Gallery from '../components/Gallery';

// export const task = {
//   id: '1',
//   title: 'I am a task',
//   state: 'TASK_INBOX',
//   updatedAt: new Date(2018, 0, 1, 9, 0),
// };

// export const actions = {
//   onPinTask: action('onPinTask'),
//   onArchiveTask: action('onArchiveTask'),
// };

// export const dynamic = {
//   id: '1',
//   title: text('Name', 'I am a task'),
//   // state: options('Variant', {
//   //   normal: null,
//   //   pinned: 'pinned',
//   //   archived: 'archived',
//   // }, 'pinned', { display: 'inline-radio' }),
//   updatedAt: new Date(2018, 0, 1, 9, 0),
// };
const items = Array(12)
items.fill('gallery')

storiesOf('Gallery', module)
  .add('default', () => <Gallery text="gallery"  />)