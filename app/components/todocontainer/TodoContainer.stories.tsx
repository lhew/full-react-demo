import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TodoItemWrapper, TodoListContainer } from '.';
import { Card } from '../core/card';
import todoMock from '../../__mocks__/todoMock';
import TodoItem from '../todoitem';
export default {
  title: 'Miscellaneous/TodoListContainer',
  component: TodoListContainer,
} as ComponentMeta<typeof TodoListContainer>;

const Template: ComponentStory<typeof TodoListContainer> = (args) => (
  <>
    <TodoListContainer>
      <div>
        {todoMock
          .filter((_, i) => i < args.items)
          .map((todo, i) => {
            return (
              <Card key={i} border>
                <TodoItemWrapper checked={i % 3 === 0}>
                  <TodoItem {...todo} />
                </TodoItemWrapper>
              </Card>
            );
          })}
      </div>
    </TodoListContainer>
  </>
);

export const Default = Template.bind({});
Default.argTypes = {
  items: {
    defaultValue: 1,
    control: { type: 'number', min: 0, max: 10 },
  },
};
