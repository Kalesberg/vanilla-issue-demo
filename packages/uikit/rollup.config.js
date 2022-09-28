import { babel } from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import url from '@rollup/plugin-url';
import image from '@rollup/plugin-image';
import svgr from '@svgr/rollup';
import typescriptEngine from 'typescript';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      assetFileNames: '[name][extname]',
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
      assetFileNames: '[name][extname]',
    },
  ],
  plugins: [
    peerDepsExternal(),
    vanillaExtractPlugin(),
    typescript({
      clean: true,
      typescript: typescriptEngine,
      exclude: ['dist', 'node_modules/**'],
    }),
    commonjs(),
    babel({
      babelHelpers: 'runtime',
      exclude: /node_modules/,
    }),
    url(),
    image(),
    svgr(),
    terser(),
  ],
};
