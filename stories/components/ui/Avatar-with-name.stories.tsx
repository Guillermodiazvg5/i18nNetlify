import type { Meta, StoryObj } from '@storybook/react';

import { AvatarWithName } from '../../../app/components/ui/avatar-with-name';
import { H6 } from '@mitimiti/components/ui/typography/h6';
import { FaStar } from 'react-icons/fa';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof AvatarWithName> = {
  title: 'UI/AvatarName',
  component: AvatarWithName,
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
    picture: 'https://github.com/shadcn.png',
    alt: 'Avatar',
    fallback: 'JA',
    name: 'Cristina',
    children: (
      <>
        <H6 className="font-bold">4.9</H6>
        <FaStar className="text-yellow" />
      </>
    ),
  },
};
