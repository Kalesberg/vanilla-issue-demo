import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { vars } from './vars.css';

const responsiveProperties = defineProperties({
  conditions: {
    sm: { '@media': 'screen and (min-width: 0px)' },
    smd: { '@media': 'screen and (min-width: 500px)' },
    md: { '@media': 'screen and (min-width: 768px)' },
    lg: { '@media': 'screen and (min-width: 1024px)' },
    xl: { '@media': 'screen and (min-width: 1280px)' },
    xxl: { '@media': 'screen and (min-width: 1536px)' },
  },
  defaultCondition: 'sm',
  properties: {
    display: ['none', 'flex', 'block'],
    flexDirection: ['row', 'column'],
    position: ['absolute', 'relative', 'fixed', 'sticky'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-between',
      'space-around',
    ],
    gap: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    width: {
      full: '100%',
      '100vw': '100vw',
      'fit-content': 'fit-content',
      auto: 'auto',
      half: '50%',
      quarter: '25%',
      ...vars.space,
    },
    height: {
      '100vh': '100vh',
      1: 1,
      50: 50,
      ...vars.space,
    },
    borderRadius: vars.borderRadius,
    fontFamily: vars.fontFamily,
    fontSize: vars.fontSize,
    textAlign: ['center', 'end', 'start'],
    flexWrap: ['nowrap', 'wrap'],
    flex: [0, 1, 2, 3, 4],
    opacity: [0, 0.25, 0.5, 0.75, 1],
    pointerEvents: ['none', 'auto'],
    textTransform: ['uppercase', 'lowercase', 'none'],
    textDecoration: ['underline', 'none'],
    filter: ['invert(1)', 'invert(0)'],
    fontWeight: vars.fontWeight,
    letterSpacing: vars.letterSpacing,
    lineHeight: vars.lineHeight,
    overflowX: ['hidden', 'scroll'],
    overflow: ['hidden', 'scroll'],
    top: { '0': 0, ...vars.space },
    bottom: { '0': 0, ...vars.space },
    left: { '0': 0, ...vars.space },
    right: { '0': 0, ...vars.space },
    whiteSpace: ['normal', 'nowrap'],
    alignSelf: ['flex-start'],
    visibility: ['hidden', 'visible'],
    borderWidth: [0, 1, 2],
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    placeItems: ['alignItems', 'justifyContent'],
    typeSize: ['fontSize', 'lineHeight'],
  },
});

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
  responsiveProperties,
  unresponsiveProperties,
  colorModeProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
