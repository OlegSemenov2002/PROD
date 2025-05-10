import {Meta, StoryObj} from '@storybook/react';

import {AppLink, AppLinkTheme} from "./AppLink";
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';


// Default export with metadata
const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/'
    }
};

export default meta;

type Story = StoryObj<typeof AppLink>;

// Primary story
export const Primary: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.PRIMARY

    },
    decorators: [ThemeDecorator(Theme.LIGHT)]

};

export const PrimaryDark: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.PRIMARY

    },
    decorators: [ThemeDecorator(Theme.DARK)]

};

export const Secondary: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.SECONDARY

    },
    decorators: [ThemeDecorator(Theme.LIGHT)]

};

export const SecondaryDark: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.SECONDARY

    },
    decorators: [ThemeDecorator(Theme.DARK)]

};
export const Red: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.RED

    },
    decorators: [ThemeDecorator(Theme.LIGHT)]

};

export const RedDark: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.RED

    },
    decorators: [ThemeDecorator(Theme.DARK)]

};