import type { Meta, StoryObj } from '@storybook/react';
import {
  withRouter,
  reactRouterParameters,
} from 'storybook-addon-remix-react-router';

import { InputDatePicker } from '@mitimiti/components/input-date-picker';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof InputDatePicker> = {
  title: 'UI/InputDatePicker',
  component: InputDatePicker,
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
  render: ({ ...args }) => <InputDatePicker {...args} />,
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { date: '124325435354' },
      },
    }),
  },
  args: {
    buttonId: 'btn-travel-date',
  },
};
