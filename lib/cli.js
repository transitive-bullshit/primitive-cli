'use strict'

const program = require('commander')

const primitive = require('primitive')
const { version } = require('../package')

module.exports = (argv) => {
  program
    .version(version)
    .option('-i, --input <filename>', 'Path of input image to process')
    .option('-o, --output <filename>', 'Path to generate output image', String, 'out.png')
    .option('-s, --num-steps <number>', 'Number of steps to process [1, 1000]', (s) => parseInt(s), 200)
    .option('-e, --min-energy <number>', 'Minimum energy to stop processing early [0, 1]', (v) => parseFloat(v))
    .option('-a, --shape-alpha <number>', 'Alpha opacity of shapes [0, 255]', parseInt, 128)
    .option('-t, --shape-type <string>', 'Type of shapes to use (rotated-ellipse, rectangle, random, etc)', (v) => '' + v, 'triangle')
    .option('-c, --num-candidates <number>', 'Number of top-level candidates per step [1, 32]', (v) => parseInt(v), 1)
    .option('-r, --num-candidate-shapes <number>', 'Number of random candidates shapes per step [10, 1000]', (v) => parseInt(v), 50)
    .option('-m, --num-candidate-mutations <number>', 'Number of candidate mutations per step [10, 500]', (v) => parseInt(v), 100)
    .option('-E, --num-candidate-extras <number>', 'Number of extra candidate shapes per step [0, 16]', (v) => parseInt(v), 0)
    .option('-n, --nth-frame <number>', 'Record every nth frame (for gifs) [1, 32]', (v) => parseInt(v), 1)

  program.parse(argv)

  const {
    input,
    output,
    numSteps,
    minEnergy,
    shapeAlpha,
    shapeType,
    numCandidates,
    numCandidateShapes,
    numCandidateMutations,
    numCandidateExtras,
    nthFrame
  } = program

  primitive({
    input,
    output,
    numSteps,
    minEnergy,
    shapeAlpha,
    shapeType,
    numCandidates,
    numCandidateShapes,
    numCandidateMutations,
    numCandidateExtras,
    nthFrame,
    log: console.log.bind(console)
  }).catch((err) => {
    console.error('error', err)
  })
}

module.exports(process.argv)
