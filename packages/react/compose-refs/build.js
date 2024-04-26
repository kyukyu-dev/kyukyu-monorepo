import run from '@kyukyu/esbuild-config'
import pkg from './package.json' assert { type: 'json' }

run({ pkg })
