import { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';

// Default export with metadata
const meta: Meta<typeof ThemeSwitcher> = {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },

};

export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

// Primary story
export const Normal: Story = {
    args: {

    },

};

export const Dark: Story = {
    args: {

    },
    decorators: [ThemeDecorator(Theme.DARK)],

};
