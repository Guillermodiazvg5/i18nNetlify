import type { Meta, StoryObj } from '@storybook/react';
import SectionInformation from '@mitimiti/components/section-information';

const meta: Meta<typeof SectionInformation> = {
  title: 'Section/SectionInformation',
  component: SectionInformation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    backgroundColor: 'light',
  },
};

export const Secondary: Story = {
  args: {
    backgroundColor: 'blue',
  },
};

export const Tertiary: Story = {
  args: {
    backgroundColor: 'dark',
  },
};
