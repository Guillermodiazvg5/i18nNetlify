import type { Meta, StoryObj } from '@storybook/react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@mitimiti/components/ui/dropdown-menu';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof DropdownMenu> = {
  title: 'UI/DropdownMenu',
  component: DropdownMenu,
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

export const Primary: Story = {
  render: () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>Abrir</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Perfil</DropdownMenuItem>
          <DropdownMenuItem>Mis Viajes</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};
