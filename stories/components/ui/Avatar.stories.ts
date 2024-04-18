import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '../../../app/components/ui/avatar';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
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
export const AvatarImage: Story = {
  args: {
    src: 'https://github.com/shadcn.png',
    alt: 'Avatar',
    fallback: 'JA',
    classNameWrapper: '',
    classNameAvatar: '',
    classNameFallback: '',
  },
};

export const Fallback: Story = {
  args: {
    alt: 'Avatar',
    fallback: 'JA',
    classNameWrapper: '',
    classNameAvatar: '',
    classNameFallback: '',
  },
};

export const CustomStyle: Story = {
  args: {
    src: 'https://github.com/shadcn.png',
    alt: 'Avatar',
    fallback: 'JA',
    classNameWrapper: 'w-40 h-40',
    classNameAvatar: '',
    classNameFallback: 'bg-blue-900 text-white',
  },
};
