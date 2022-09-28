import { style } from '@vanilla-extract/css';

export const button = style({
  background: 0,
  border: 0,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
});

// HTML5 display-role reset for older browsers
const block = style({
  display: 'block',
});

const a = style({
  textDecoration: 'none',
});

const body = style({
  lineHeight: 1,
});

const list = style({
  listStyle: 'none',
});

const quote = style({
  quotes: 'none',
  selectors: {
    '&:before, &:after': {
      content: "''",
    },
  },
});

const table = style({
  borderCollapse: 'collapse',
  borderSpacing: 0,
});

// Custom reset rules
const mark = style({
  backgroundColor: 'transparent',
  color: 'inherit',
});

const select = style({
  appearance: 'none',
  selectors: {
    '&::-ms-expand': {
      display: 'none',
    },
  },
});

export const element = {
  button,
  a,
  ul: list,
  ol: list,
  blockquote: quote,
  q: quote,
  body,
  table,
  mark,
  select,
};
