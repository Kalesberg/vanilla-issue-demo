import { createGlobalTheme } from '@vanilla-extract/css';

const createSteps = (base: number, increments: number) => (steps: number) =>
  `${base + steps * increments}px`;

const spaceIncrements = createSteps(4, 4);

export const vars = createGlobalTheme(':root', {
  space: {
    none: '0',
    '0x': spaceIncrements(0),
    '1x': spaceIncrements(1),
    '2x': spaceIncrements(2),
  },
  color: {
    white: '#fff',
    black: '#000',

    //Text & Icons
    primary: '#fff',
    secondary: '#828282',
    tertiary: '#1C1C1E',
    action: '#B5FF00',
    'action-secondary': '#4F74F7',
    positive: '#97FCC3',
    negative: '#F34822',
    warning: '#FFC929',
    inverted: '#131416',
    none: '#FFFFFF00',
  },
  fontFamily: {
    heading: "'Space Grotesk', sans-serif",
    body: "'Space Grotesk', sans-serif",
    func: "'Inter', sans-serif",
    rubric: "'Inter', sans-serif",
  },
});
