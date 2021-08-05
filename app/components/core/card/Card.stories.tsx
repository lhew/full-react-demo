import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '.';

export default {
  title: 'Core/Card',
  component: Card,
  args: {
    shadow: false,
    border: false,
    dashed: false,
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <div style={{ maxWidth: '30em' }}>
    <Card shadow={args.shadow} border={args.border} dashed={args.dashed}>
      <h3>This is a card</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsa
        aperiam laudantium. Dolore quae voluptates mollitia aspernatur ipsam
        iure quod omnis similique facere repellat, quasi, accusantium
        necessitatibus fugit nisi laboriosam?
      </p>
    </Card>
  </div>
);

export const Default = Template.bind({});
