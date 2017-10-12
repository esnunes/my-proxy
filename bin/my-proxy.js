#!/usr/bin/env node

var path = require('path');
var escapeRE = require('escape-regexp');

require('babel-register')({
  presets: [
    'stage-0',
    ['env', {
      targets: {
        node: '6.10',
      },
    }],
  ],
});

require('../lib/cli');
