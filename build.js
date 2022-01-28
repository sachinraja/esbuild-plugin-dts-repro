import {build} from 'esbuild'
import { dtsPlugin } from 'esbuild-plugin-d.ts'

build({
  entryPoints: ['./src/index.ts'],
  outdir: 'dist',
  plugins: [dtsPlugin({
    tsconfig: 'tsconfig.json'
  })],
})
