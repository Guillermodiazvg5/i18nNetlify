import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../../app/components/ui/button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'default',
    children: 'Click me',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Click me',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Click me',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Click me',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Click me',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Click me',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    variant: 'default',
    children: 'Click me',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    variant: 'default',
    children: 'Click me',
  },
};

export const Icon: Story = {
  args: {
    size: 'icon',
    variant: 'default',
    children: '🚀',
  },
};
