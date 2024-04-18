import type { Meta, StoryObj } from '@storybook/react';
import HowItWork from '@mitimiti/components/how-it-work';

const meta: Meta<typeof HowItWork> = {
  title: 'How/HowItWork',
  component: HowItWork,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
