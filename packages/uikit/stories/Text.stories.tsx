import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Text from '../src/components/Typography/Text';

const Storybook = {
  title: 'Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const body1 = Template.bind({});
body1.args = {
  level: 'b1',
  children: <>b1: This is a test</>,
};

export const body2 = Template.bind({});
body2.args = {
  level: 'b2',
  children: <>b2: This is a test</>,
};
export const body3 = Template.bind({});
body3.args = {
  level: 'b3',
  children: <>b3: This is a test</>,
};
export const body4 = Template.bind({});
body4.args = {
  level: 'b4',
  children: <>b4: This is a test</>,
};
export const body5 = Template.bind({});
body5.args = {
  level: 'b5',
  children: <>b5: This is a test</>,
};

export const func1 = Template.bind({});
func1.args = {
  level: 'f1',
  children: <>b5: This is a test</>,
};

export const func2 = Template.bind({});
func2.args = {
  level: 'f2',
  children: <>b5: This is a test</>,
};
export const func3 = Template.bind({});
func3.args = {
  level: 'f3',
  children: <>b5: This is a test</>,
};
export const func4 = Template.bind({});
func4.args = {
  level: 'f4',
  children: <>b5: This is a test</>,
};
export const func5 = Template.bind({});
func5.args = {
  level: 'f5',
  children: <>b5: This is a test</>,
};

export default Storybook;
