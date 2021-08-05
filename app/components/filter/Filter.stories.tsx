import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Filter from '.';
import { Card } from '../core/card';
import todoMock from '../../__mocks__/todoMock';
import TodoItem from '../todoitem';
export default {
  title: 'Miscellaneous/Filter',
  component: Filter,
} as ComponentMeta<typeof Filter>;

const Template = () => (
  <>
    <Filter
      tasks={todoMock}
      onFilter={(selected) => console.log('clicked on ', selected)}
    />
  </>
);

export const Default = Template.bind({});
