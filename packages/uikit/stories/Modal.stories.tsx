import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from '../src/components/Modal/Modal';

const Storybook = {
  title: 'Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const ModalWrapper = Template.bind({});
ModalWrapper.args = {};

export default Storybook;
