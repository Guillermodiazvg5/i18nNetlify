import type { Meta, StoryObj } from '@storybook/react';

import Modal from '../../../app/components/ui/modal';
import StepTwoTrip from '../../../app/components/trips/step-two-trip';
import {
  reactRouterParameters,
  withRouter,
} from 'storybook-addon-remix-react-router';

const meta = {
  title: 'Modal/Open',
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

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: ({ ...args }) => <Modal {...args} />,
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { date: '124325435354' },
      },
    }),
  },
  args: {
    open: true,
    onOpenChange: () => {},
    children: <StepTwoTrip />,
  },
};
