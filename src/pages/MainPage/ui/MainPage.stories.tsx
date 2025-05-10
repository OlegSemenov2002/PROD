import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';

// Default export with metadata
const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
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

type Story = StoryObj<typeof MainPage>;

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
