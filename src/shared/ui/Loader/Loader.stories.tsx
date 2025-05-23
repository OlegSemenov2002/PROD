import { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Loader } from './Loader';

// Default export with metadata
const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },

};

export default meta;

type Story = StoryObj<typeof Loader>;

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
