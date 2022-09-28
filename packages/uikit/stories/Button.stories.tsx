import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../src/components/Button/Button';

const Storybook = {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'large',
  label: 'Primary Button',
};

export default Storybook;
