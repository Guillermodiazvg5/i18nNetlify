import type { Meta, StoryObj } from '@storybook/react';
import { createRemixStub } from '@remix-run/testing';
import SubscriptionForm from '../../../app/components/subscribe-form';

const meta: Meta = {
  title: 'Subscribe/Subscription',
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [
    () => {
      const RemixStub = createRemixStub([
        {
          path: '/',
          Component: () => (
            <div className="m-8">
              {' '}
              <SubscriptionForm />
            </div>
          ),
        },
      ]);
      return <RemixStub />;
    },
  ],
};
