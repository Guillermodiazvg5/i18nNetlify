import type { Meta, StoryObj } from '@storybook/react';

import { InputWithLabel } from '../../../app/components/ui/input-with-label';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof InputWithLabel> = {
    title: 'UI/InputWithLabel',
    component: InputWithLabel,
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
        type: 'phone',
        placeholder: '+57 3003526578',
        htmlFor: 'phone-number',
        textLabel: 'Phone number',
    },
};
