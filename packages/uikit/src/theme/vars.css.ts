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
  weight: {
    regular: '400',
    medium: '500',
    'semi-bold': '600',
    bold: '700',
  },
});
