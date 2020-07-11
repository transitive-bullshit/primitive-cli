# primitive-cli

> CLI to reproduce images from geometric primitives (Node.js + browser port of [primitive](https://github.com/fogleman/primitive)).

[![NPM](https://img.shields.io/npm/v/primitive-cli.svg)](https://www.npmjs.com/package/primitive-cli) [![Build Status](https://travis-ci.com/transitive-bullshit/primitive-cli.svg?branch=master)](https://travis-ci.com/transitive-bullshit/primitive-cli) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This CLI is also available as a [library](https://github.com/transitive-bullshit/primitive).

[![Demo](https://storage.googleapis.com/transitive-bullshit-primitive/artem-bali-578205-unsplash-triangle-500.png)](https://transitive-bullshit.github.io/primitive-web/)

## Install

```bash
npm install -g primitive-cli
```

## Usage

```bash
  Usage: primitive [options]

  Options:

    -V, --version                           output the version number
    -i, --input <filename>                  Path of input image to process
    -o, --output <filename>                 Path to generate output image (default: out.png)
    -s, --num-steps <number>                Number of steps to process [1, 1000] (default: 200)
    -e, --min-energy <number>               Minimum energy to stop processing early [0, 1]
    -a, --shape-alpha <number>              Alpha opacity of shapes [0, 255] (default: 128)
    -t, --shape-type <string>               Type of shapes to use (rotated-ellipse, rectangle, random, etc) (default: triangle)
    -c, --num-candidates <number>           Number of top-level candidates per step [1, 32] (default: 1)
    -r, --num-candidate-shapes <number>     Number of random candidates shapes per step [10, 1000] (default: 50)
    -m, --num-candidate-mutations <number>  Number of candidate mutations per step [10, 500] (default: 100)
    -E, --num-candidate-extras <number>     Number of extra candidate shapes per step [0, 16] (default: 0)
    -n, --nth-frame <number>                Record every nth frame (for gifs) [1, 32] (default: 1)
    -h, --help                              output usage information
```

## Related

-   [primitive (js)](https://github.com/transitive-bullshit/primitive) - JS library for this CLI.
-   [primitive (go)](https://github.com/fogleman/primitive) - Original Go version by [Michael Fogleman](https://www.michaelfogleman.com/)

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)

Support my OSS work by <a href="https://twitter.com/transitive_bs">following me on twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>
