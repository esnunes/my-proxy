#!/usr/bin/env node

var path = require('path');
var escapeRE = require('escape-regexp');


require('babel/register')({
  stage: 0,
  ignore: new RegExp('^' + escapeRE(path.join(__dirname, '../node_modules'))),
});


require('../lib/cli');
