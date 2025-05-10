import {Meta, StoryObj} from '@storybook/react';

import {ErrorPage} from "./ErrorPage";
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';



// Default export with metadata
const meta: Meta<typeof ErrorPage> = {
    title: 'widget/ErrorPage',
    component: ErrorPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    }
};

export default meta;

type Story = StoryObj<typeof ErrorPage>;

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
