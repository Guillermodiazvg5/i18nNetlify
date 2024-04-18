import type { Meta, StoryObj } from '@storybook/react';
import { createRemixStub } from '@remix-run/testing';

import Footer from '@mitimiti/components/footer';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Footer> = {
  title: 'Footer/default',
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  decorators: [
    () => {
      const RemixStub = createRemixStub([
        {
          path: '/',
          Component: () => <Footer>Form</Footer>,
        },
      ]);

      return <RemixStub />;
    },
  ],
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: {
      description: 'Children of the component',
      control: {
        type: 'node',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};
