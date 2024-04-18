import type { Meta, StoryObj } from '@storybook/react';

import Modal from '../../../app/components/ui/modal';
import ProfileContainer from '@mitimiti/components/ProfileContainer';

const meta = {
  title: 'ModalPost/Post',
  component: Modal,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalOpen: Story = {
  render: (args) => <Modal {...args} />,
  args: {
    open: true,
    onOpenChange: () => {},
    children: <ProfileContainer />,
  },
};
