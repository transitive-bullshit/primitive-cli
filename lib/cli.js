'use strict'

const program = require('commander')

const primitive = require('primitive')
const { version } = require('../package')

module.exports = (argv) => {
  program
    .version(version)
    .option('-i, --input <filename>', 'Path of image to process')
    .option('-o, --output <filename>', 'Path to save generated image')
    .option('-s, --num-steps <number>', 'Number of steps to process [1, 1000]', parseInt, 200)
    .option('-e, --min-energy <number>', 'Minimum energy to stop processing early [0, 1]', parseFloat)
    .option('-a, --shape-alpha <number>', 'Alpha opacity of shapes [0, 255]', parseInt, 128)
    .option('-t, --shape-type <string>', 'Type of shapes to use (rotated-ellipse, rectangle, random, etc)', (s) => s, 'triangle')
    .option('-c, --num-candidates <number>', 'Number of top-level candidates per step [1, 32]', parseInt, 1)
    .option('-r, --num-candidate-shapes <number>', 'Number of random candidates shapes per step [10, 1000]', parseInt, 50)
    .option('-m, --num-candidate-mutations <number>', 'Number of candidate mutations per step [10, 500]', parseInt, 100)
    .option('-E, --num-candidate-extras <number>', 'Number of extra candidate shapes per step [0, 16]', parseInt, 0)

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
    numCandidateExtras
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
    logger: console
  }).catch((err) => {
    console.error('error', err)
  })
}

module.exports(process.argv)
