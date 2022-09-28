import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from '../src';

const Storybook = {
  title: 'Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = args => <Heading {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  level: '1',
  children: <>This is a test</>,
};

export const Heading2 = Template.bind({});
Heading2.args = {
  level: '2',
  children: <>This is a test</>,
};
export const Heading3 = Template.bind({});
Heading3.args = {
  level: '3',
  children: <>This is a test</>,
};
export const Heading4 = Template.bind({});
Heading4.args = {
  level: '4',
  children: <>This is a test</>,
};
export const Heading5 = Template.bind({});
Heading5.args = {
  level: '5',
  children: <>This is a test</>,
};
export const Heading6 = Template.bind({});
Heading6.args = {
  level: '6',
  children: <>This is a test</>,
};

export default Storybook;
