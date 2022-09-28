import { createGlobalTheme } from '@vanilla-extract/css';

const createSteps = (base: number, increments: number) => (steps: number) =>
  `${base + steps * increments}px`;

const spaceIncrements = createSteps(4, 4);

export const heading = {
  h1: {
    fontSize: '60px',
    lineHeight: '70px',
    fontWeight: '400',
    letterSpacing: '4px',
  },
  h2: {
    fontSize: '34px',
    lineHeight: '42px',
    fontWeight: '400',
    letterSpacing: '3px',
  },
  h3: {
    fontSize: '28px',
    lineHeight: '34px',
    fontWeight: '400',
    letterSpacing: '3px',
  },
  h4: {
    fontSize: '22px',
    lineHeight: '28px',
    fontWeight: '400',
    letterSpacing: '3px',
  },
  h5: {
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: '400',
    letterSpacing: '3px',
  },
  h6: {
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: '400',
    letterSpacing: '3px',
  },
};

export const text = {
  b1: {
    fontSize: '17px',
    lineHeight: '22px',
  },
  b2: {
    fontSize: '14px',
    lineHeight: '22px',
  },
  b3: {
    fontSize: '12px',
    lineHeight: '16px',
  },
  b4: {
    fontSize: '11px',
    lineHeight: '12px',
  },
  b5: {
    fontSize: '10px',
    lineHeight: '12px',
  },
  f1: {
    fontSize: '34px',
  },
  f2: {
    fontSize: '28px',
  },
  f3: {
    fontSize: '18px',
  },
  f4: {
    fontSize: '13px',
  },
  f5: {
    fontSize: '11px',
  },
  r1: {
    fontSize: '11px',
  },
  r2: {
    fontSize: '11px',
  },
  r3: {
    fontSize: '11px',
  },
};

export const vars = createGlobalTheme(':root', {
  space: {
    none: '0',
    '0x': spaceIncrements(0),
    '1x': spaceIncrements(1),
    '2x': spaceIncrements(2),
    '3x': spaceIncrements(3),
    '4x': spaceIncrements(4),
    '5x': spaceIncrements(5),
    '6x': spaceIncrements(6),
    '7x': spaceIncrements(7),
    '8x': spaceIncrements(8),
    '9x': spaceIncrements(9),
    '10x': spaceIncrements(10),
    '11x': spaceIncrements(11),
    '12x': spaceIncrements(12),
    '14x': spaceIncrements(14),
    '16x': spaceIncrements(16),
    '18x': spaceIncrements(18),
    '20x': spaceIncrements(20),
    '22x': spaceIncrements(22),
    '24x': spaceIncrements(24),
    '28x': spaceIncrements(28),
    '30x': spaceIncrements(30),
    '32x': spaceIncrements(32),
    '36x': spaceIncrements(36),
    '40x': spaceIncrements(40),
    '48x': spaceIncrements(48),
    '54x': spaceIncrements(54),
    '60x': spaceIncrements(60),
    '72x': spaceIncrements(72),
    '84x': spaceIncrements(84),
    '92x': spaceIncrements(92),
    '104x': spaceIncrements(104),
    '116x': spaceIncrements(116),
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

    'ui-action-primary': '#B5FF00',
    'ui-action-secondary': 'rgba(214, 254, 81, 0.13)',
    'ui-hover': '#DAFF80',
    'ui-active': '#FBFBFB',
    'ui-positive': '#97FCC3',
    'ui-negative': '#F34822',
    'ui-info': '#0A84FF',

    'border-grey': '#3B3B3B',

    none: '#FFFFFF00',

    //Background
    'bg-primary': '#000000',
    'bg-secondary': '#1C1C1E',
    'bg-tertiary': '#2C2C2E',
    'bg-primary-elev': '#131314',
    'bg-secondary-elev': '#1C1C1E',
    'bg-tertiary-elev': '#2C2C2E',

    //Overlays
    'overlay-thick': '#000000EB',
    'overlay-regular': '#000000C7',
    'overlay-thin': '#00000099',
    'overlay-ultrathin': '#00000090',
    'overlay-darkerner': '#00000012',

    //Background Grey
    'bg-1': '#BDBDBD',
    'bg-2': '#969696',
    'bg-3': '#767676',
    'bg-4': '#1B1B1B',
    'bg-5': '#0F0F0F',
    'bg-6': '#000000',
    'dialog-fill': '#000000CC',

    //Background Whites
    'bg-white-primary': '#FFFFFF',
    'bg-white-secondary': '#FFFFFF99',
    'bg-white-tertiary': '#FFFFFF4D',
    'bg-white-quartermary': '#FFFFFF2E',

    //Background Fill
    'fill-primary': '#78788080',
    'fill-secondary': '#78788052',
    'fill-tertiary': '#7878803D',
    'fill-quartermary': '#7474802E',

    //Separators
    'separator-opaque': '#252627',
    'separator-non-opaque': '#545458B3',
  },
  borderRadius: {
    rounded: '50%',
  },
  fontFamily: {
    heading: "'Space Grotesk', sans-serif",
    body: "'Space Grotesk', sans-serif",
    func: "'Inter', sans-serif",
    rubric: "'Inter', sans-serif",
  },
  fontSize: {
    b1: text.b1.fontSize,
    b2: text.b2.fontSize,
    b3: text.b3.fontSize,
    b4: text.b4.fontSize,
    b5: text.b5.fontSize,
    f1: text.f1.fontSize,
    f2: text.f2.fontSize,
    f3: text.f3.fontSize,
    f4: text.f4.fontSize,
    f5: text.f5.fontSize,
    r1: text.r1.fontSize,
    r2: text.r2.fontSize,
    r3: text.r3.fontSize,
    '1': heading.h1.fontSize,
    '2': heading.h2.fontSize,
    '3': heading.h3.fontSize,
    '4': heading.h4.fontSize,
    '5': heading.h5.fontSize,
    '6': heading.h6.fontSize,
  },
  fontWeight: {
    '1': heading.h1.fontWeight,
    '2': heading.h2.fontWeight,
    '3': heading.h3.fontWeight,
    '4': heading.h4.fontWeight,
    '5': heading.h5.fontWeight,
    '6': heading.h6.fontWeight,
    '400': '400',
    '500': '500',
    '600': '600',
    '700': '700',
  },
  lineHeight: {
    b1: text.b1.lineHeight,
    b2: text.b2.lineHeight,
    b3: text.b3.lineHeight,
    b4: text.b4.lineHeight,
    b5: text.b5.lineHeight,
    f1: 'normal',
    f2: 'normal',
    f3: 'normal',
    f4: 'normal',
    f5: 'normal',
    r1: 'normal',
    r2: 'normal',
    r3: 'normal',
    '1': heading.h1.lineHeight,
    '2': heading.h2.lineHeight,
    '3': heading.h3.lineHeight,
    '4': heading.h4.lineHeight,
    '5': heading.h5.lineHeight,
    '6': heading.h6.lineHeight,
  },
  letterSpacing: {
    '1': heading.h1.letterSpacing,
    '2': heading.h2.letterSpacing,
    '3': heading.h3.letterSpacing,
    '4': heading.h4.letterSpacing,
    '5': heading.h5.letterSpacing,
    '6': heading.h6.letterSpacing,
  },

  weight: {
    regular: '400',
    medium: '500',
    'semi-bold': '600',
    bold: '700',
  },
});
