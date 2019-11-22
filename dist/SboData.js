"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var check = require('check-types');

var buildTeamMatchesUrl = require('./buildTeamMatchesUrl');

var readRawMatches = require('./readRawMatches');

var parseRawMatches = require('./parseRawMatches');

var getMatches = require('./getMatches');

var buildTableUrl = require('./buildTableUrl');

var readRawTable = require('./readRawTable');

var parseRawTable = require('./parseRawTable');

var getTable = require('./getTable');

var baseUrl = 'https://api.h4a.mobi/spo/spo-proxy_public.php';

var SboData = function SboData(params) {
  _classCallCheck(this, SboData);

  check.assert.object(params, 'params is not an object');
  check.assert.object(params.logger, 'params.logger is not an object');
  this.buildTeamMatchesUrl = buildTeamMatchesUrl.bind(this);
  this.readRawMatches = readRawMatches.bind(this);
  this.parseRawMatches = parseRawMatches.bind(this);
  this.getMatches = getMatches.bind(this);
  this.buildTableUrl = buildTableUrl.bind(this);
  this.readRawTable = readRawTable.bind(this);
  this.parseRawTable = parseRawTable.bind(this);
  this.getTable = getTable.bind(this);
  Object.assign(this, params);
  this.baseUrl = baseUrl;
};

module.exports = SboData;