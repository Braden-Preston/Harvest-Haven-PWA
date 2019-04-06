import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { Button } from '@material-ui/core';

// Import some custom components

storiesOf('Material-UI', module)
    .addDecorator(withKnobs)
    .add('Button Colors', () => (
        <>
            <Button variant="contained">Button</Button>
            <Button color="primary" variant="contained">Primary</Button>
            <Button color="secondary" variant="contained">Secondary</Button>
            <Button color="default" variant="contained">Default</Button>
            <Button color="inherit" variant="contained">Inherit</Button>
        </>
    ))
    // Knobs for React props
    .add('with a button', () => (
        <button disabled={boolean('Disabled', false)} >
            {text('Label', 'Hello Storybook')}
        </button>
    ))
    // Knobs as dynamic variables.
      .add('as dynamic variables', () => {
        const name = text('Name', 'Arunoda Susiripala');
        const age = number('Age', 89);

        const content = `I am ${name} and I'm ${age} years old.`;
        return (<div>{content}</div>);
    });