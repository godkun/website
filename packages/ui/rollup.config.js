import { defineConfig } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import { nodeResolve as resolve } from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue'
import { babel } from '@rollup/plugin-babel'
import { name } from './package.json'

export default defineConfig([
  {
    input: 'vue/index.ts',
    external: ['vue'],
    plugins: [
      vue(),
      typescript(),
      resolve({
        extensions: ['.ts', '.js', '.vue']
      }),
      postcss({}),
      commonjs(),
      babel({
        presets: ['@babel/preset-env'],
        plugins: [
          '@babel/plugin-proposal-object-rest-spread',
          '@babel/plugin-syntax-object-rest-spread',
          [
            '@babel/plugin-transform-runtime',
            {
              absoluteRuntime: false,
              corejs: false,
              helpers: false,
              regenerator: true,
              useESModules: false
            }
          ]
        ],
        babelrc: false,
        extensions: [
          '.js',
          '.ts',
          '.tsx',
          '.jsx',
          '.es6',
          '.es',
          '.mjs',
          '.vue'
        ]
      })
    ],
    output: [
      {
        name,
        file: './dist/vue/index.js',
        format: 'umd',
        exports: 'named',
        globals: {
          vue: 'Vue'
        }
      },
      {
        name,
        file: './es/vue/index.js',
        format: 'es'
      },
      {
        name,
        file: './lib/vue/index.cjs',
        format: 'commonjs'
      }
    ]
  }
])
