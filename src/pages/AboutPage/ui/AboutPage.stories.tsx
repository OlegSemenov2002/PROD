import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AboutPage from './AboutPage';

// Default export with metadata
const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {

    },
};

export default meta;

type Story = StoryObj<typeof AboutPage>;

// Primary story
export const Normal: Story = {
    args: {

    },
};

// Clear theme story

// @ts-ignore
export const Dark: Story = {
    args: {

    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
