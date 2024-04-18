import type { Meta, StoryObj } from '@storybook/react';

import Layout from '../../../app/components/layouts/layout-account';
import img from '../../assets/image-container.png';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Layout> = {
  title: 'layouts/Layout',
  component: Layout,
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
      <Layout srcImage={img} renderHeader={() => <div>Header</div>}>
        <div className="h-full p-4 flex justify-center">Content</div>
      </Layout>
    </div>
  ),
};
