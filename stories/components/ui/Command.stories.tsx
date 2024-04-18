import { Meta, StoryObj } from '@storybook/react';

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from '@mitimiti/components/ui/command';
import { LiaMapMarkerAltSolid } from 'react-icons/lia';

const meta = {
    title: 'UI/Command',
    component: Command,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardTripPublished: Story = {
    render: () => {
        return (
            <Command className="rounded-lg border shadow-md">
                <CommandInput placeholder="Escribe para buscar..." />
                <CommandList>
                    <CommandEmpty>No encontramos nada</CommandEmpty>
                    <CommandGroup heading="Buscando">
                        <CommandItem>
                            <LiaMapMarkerAltSolid className="mr-2 h-4 w-4" />
                            <span>Manizales</span>
                        </CommandItem>
                        <CommandItem>
                            <LiaMapMarkerAltSolid className="mr-2 h-4 w-4" />
                            <span>Medellin</span>
                        </CommandItem>
                        <CommandItem>
                            <LiaMapMarkerAltSolid className="mr-2 h-4 w-4" />
                            <span>Bogota</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Búsquedas viejas">
                        <CommandItem>
                            <LiaMapMarkerAltSolid className="mr-2 h-4 w-4" />
                            <span>Cali</span>
                        </CommandItem>
                        <CommandItem>
                            <LiaMapMarkerAltSolid className="mr-2 h-4 w-4" />
                            <span>Guajira</span>
                        </CommandItem>
                        <CommandItem>
                            <LiaMapMarkerAltSolid className="mr-2 h-4 w-4" />
                            <span>Tolima</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
        );
    },
};
