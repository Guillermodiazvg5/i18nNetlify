import type { Meta, StoryObj } from '@storybook/react';

import SearchInput from '@mitimiti/components/input-search';
import { createRemixStub } from '@remix-run/testing';
import { json } from '@remix-run/node';

const predictions = [
  {
    description: 'Manizales, Caldas, Colombia',
    matched_substrings: [
      {
        length: 3,
        offset: 0,
      },
    ],
    place_id: 'ChIJO85CavpvR44RHBTqI2TPY6g',
    reference: 'ChIJO85CavpvR44RHBTqI2TPY6g',
  },
];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof SearchInput> = {
  title: 'UI/SearchInput',
  component: SearchInput,
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
    label: 'ORIGEN',
    inputPlaceHolder: 'DesDe',
    dialogPlaceHolder: 'Busca por ciudad',
  },
  decorators: [
    () => {
      const RemixStub = createRemixStub([
        {
          path: '/home/google-search',
          Component: SearchInput as React.ComponentType,
          action: async ({ request }) => {
            const data = await request.formData();
            const searchText = data.get('searchText') as string;
            await new Promise((res) => setTimeout(res, 1000));
            return json({
              result: { success: true, message: 'ok' },
              posted: searchText,
              predictions,
            });
          },
        },
      ]);

      return <RemixStub />;
    },
  ],
};
