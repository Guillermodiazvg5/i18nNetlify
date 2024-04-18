import ConfirmOtpContainer from '@mitimiti/components/auth/validate-otp/confirm-otp-container';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ConfirmOtpContainer> = {
  title: 'layouts/OtpConfirm',
  component: ConfirmOtpContainer,
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
  render: () => (
    <div className="p-0 w-[100vw] h-[100vh]">
      <ConfirmOtpContainer />
    </div>
  ),
};
