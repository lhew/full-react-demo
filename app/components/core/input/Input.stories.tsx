import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '.';

export default {
  title: 'Core/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Input type="text" {...args} />
);

export const Default = Template.bind({});
