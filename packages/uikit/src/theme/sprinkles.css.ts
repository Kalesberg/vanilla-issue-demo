import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { vars } from './vars.css';

const unresponsiveProperties = defineProperties({
  properties: {
    flexShrink: [0],
    flexGrow: [0, 1],
    zIndex: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    cursor: ['pointer'],
    listStyleType: ['circle', 'disc', 'square'],
    borderBottomWidth: ['1px'],
    borderStyle: ['solid'],
  },
});

const colorModeProperties = defineProperties({
  conditions: {
    //   lightMode: {'@media': '(prefers-color-scheme: light)'},
    //   darkMode: { '@media': '(prefers-color-scheme: dark)' },
    darkMode: {},
  },
  defaultCondition: 'darkMode',
  properties: {
    color: vars.color,
    background: vars.color,
    fill: vars.color,
    stroke: vars.color,
    backgroundColor: vars.color,
    borderColor: vars.color,
  },
});

export const sprinkles = createSprinkles(
  unresponsiveProperties,
  colorModeProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
