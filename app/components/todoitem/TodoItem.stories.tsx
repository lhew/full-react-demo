import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '../core/card';
import todoMock from '../../__mocks__/todoMock';
import TodoItem from '.';

export default {
  title: 'Miscellaneous/TodoItem',
  component: TodoItem,
} as ComponentMeta<typeof TodoItem>;

const Template: ComponentStory<typeof TodoItem> = (args) => (
  <TodoItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Title',
  description: 'Description',
  done: false,
  disabled: false,
  edit: false,
  withCancel: true,
  onDelete() {
    console.log('onDelete triggered');
  },
  onEdit() {
    console.log('onEdit triggered');
  },
  onUpdate(payload) {
    console.log('updating ', payload);
  },
};
