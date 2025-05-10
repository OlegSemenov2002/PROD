import {Meta, StoryObj} from '@storybook/react';

import {Navbar} from './Navbar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

// Default export with metadata
const meta: Meta<typeof Navbar> = {
    title: 'widget/Navbar',
    component: Navbar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    }
};

export default meta;

type Story = StoryObj<typeof Navbar>;

// Primary story
export const Light: Story = {
    args: {

    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};
export const Dark: Story = {
    args: {

    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
