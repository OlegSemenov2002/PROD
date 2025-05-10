import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

// Default export with metadata
const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
    args: {
        onClick: fn(),
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

// Primary story
export const Primary: Story = {
    args: {
        children: 'text',
    },
};

// Clear theme story
export const Clear: Story = {
    args: {
        children: 'clear',
        theme: ThemeButton.CLEAR,
    },
};

// Outlined theme story
export const Outlined: Story = {
    args: {
        children: 'clear',
        theme: ThemeButton.OUTLINE,
    },
};

// Dark theme story with decorator
// @ts-ignore
export const Dark: Story = {
    args: {
        children: 'clear',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
