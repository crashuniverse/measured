# measured

measured is how I save my weights on parse so that I can keep a track of weight and take some interesting notes when data increases.

## Prerequisites
`node`, `npm`, `bower`, `grunt-cli`, ruby gem `compass` to build sass.

## Install
`npm install`
`bower install`

## Run
`grunt server`

## Build mechanism
 1. A file /scripts/services/parseConfig.sample.js should be updated with API keys for a parse account. This file should be renamed to parseConfig.js
 2. `grunt` will create a build in `/dist` folder.
