import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';

import pkg from './package.json';

export default {
  input: ['src/index.tsx'],
  output: [
    {
      file: pkg.main,
      format: 'es',
      sourcemap: true
    }
  ],
  external: ['universal-tilt.js', 'react', 'prop-types'],
  plugins: [
    resolve(),
    typescript(),
    terser(),
    commonjs({
      include: 'node_modules/**'
    })
  ]
};
