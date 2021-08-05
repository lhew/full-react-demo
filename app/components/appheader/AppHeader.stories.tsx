import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AppHeader from '.';

export default {
  title: 'Miscellaneous/AppHeader',
  component: AppHeader,
} as ComponentMeta<typeof AppHeader>;

const Template: ComponentStory<typeof AppHeader> = (args) => <AppHeader />;

export const Default = Template.bind({});
