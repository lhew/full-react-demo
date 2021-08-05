import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainContainer from '.';
import { CenterWrapper, LoadingWrapper } from './styles';
import { BiError } from 'react-icons/bi';

export default {
  title: 'Miscellaneous/MainContainer',
  component: MainContainer,
} as ComponentMeta<typeof MainContainer>;

const Template: ComponentStory<typeof MainContainer> = (args) => (
  <MainContainer {...args} />
);

export const Default = Template.bind({});
export const Loading = Template.bind({});
Loading.args = {
  children: <LoadingWrapper>Loading TODOs...</LoadingWrapper>,
};
export const ErrorLoading = Template.bind({});
ErrorLoading.args = {
  children: (
    <CenterWrapper>
      <div className="icon">
        <BiError />
      </div>
      <h3>Error loading TODOs</h3>
      <p>
        Could not load TODOs due to an uncaught error. Reload the page and try
        again. If the problem persists, contact us
      </p>
    </CenterWrapper>
  ),
};
