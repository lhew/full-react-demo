import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '.';

export default {
  title: 'Core/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
export const Danger = Template.bind({});
Danger.args = {
  mode: 'danger',
};
