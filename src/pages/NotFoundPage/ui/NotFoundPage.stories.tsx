import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { NotFoundPage } from './NotFoundPage';

// Default export with metadata
const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
    args: {
    },
};

export default meta;

type Story = StoryObj<typeof NotFoundPage>;

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
