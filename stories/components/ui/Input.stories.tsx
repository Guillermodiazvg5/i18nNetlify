import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../../../app/components/ui/input';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@mitimiti/components/ui/input-otp';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
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
    type: 'text',
    placeholder: 'Type something',
  },
};

export const Otp: Story = {
  render: () => {
    return (
      <InputOTP
        maxLength={6}
        render={({ slots }) => (
          <>
            <InputOTPGroup>
              {slots.slice(0, 3).map((slot, index) => (
                <InputOTPSlot key={index} {...slot} />
              ))}
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              {slots.slice(3).map((slot, index) => (
                <InputOTPSlot key={index + 3} {...slot} />
              ))}
            </InputOTPGroup>
          </>
        )}
      />
    );
  },
};
