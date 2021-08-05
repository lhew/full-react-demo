import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormField } from '.';
import { Input } from '../input';

export default {
  title: 'Core/FormField',
  component: FormField,
} as ComponentMeta<typeof FormField>;

const Template: ComponentStory<typeof FormField> = (args) => (
  <>
    <FormField {...args}>
      <label htmlFor="email">Email</label>
      <Input placeholder="type your email here" />
    </FormField>
  </>
);

export const Default = Template.bind({});
