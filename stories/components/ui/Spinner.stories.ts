import type { Meta, StoryObj } from '@storybook/react';

import Spinner from '@mitimiti/components/ui/spinner';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Spinner> = {
    title: 'UI/Spinner',
    component: Spinner,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SpinnerSmall: Story = {
    args: {
        className: 'w-4 h-4',
    },
};

export const SpinnerMedium: Story = {
    args: {
        className: 'w-6 h-6',
    },
};

export const SpinnerLarge: Story = {
    args: {
        className: 'w-8 h-8',
    },
};
