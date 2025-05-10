import { Story } from '@storybook/blocks';
import { Theme } from 'app/providers/ThemeProvider';
// @ts-ignore
export const ThemeDecorator = (theme: Theme) => (StoryComponent: () => Story) => (
    <div className={`app ${theme}`}>

        <StoryComponent />
    </div>

);
