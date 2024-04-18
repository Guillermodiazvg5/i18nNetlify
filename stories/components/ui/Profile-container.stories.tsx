import type { Meta, StoryObj } from '@storybook/react';
import ProfileContainer from '@mitimiti/components/auth/profile-container';

const meta: Meta<typeof ProfileContainer> = {
  title: 'Profile/ProfileUser',
  component: ProfileContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
