const check = require('check-types');

const buildTeamMatchesUrl = require('./buildTeamMatchesUrl');
const readRawMatches      = require('./readRawMatches');
const parseRawMatches     = require('./parseRawMatches');
const getMatches          = require('./getMatches');

const buildTableUrl       = require('./buildTableUrl');
const readRawTable        = require('./readRawTable');
const parseRawTable       = require('./parseRawTable');
const getTable            = require('./getTable');

class SboData {
  constructor(params) {
    check.assert.object(params, 'params is not an object');
    check.assert.object(params.logger, 'params.logger is not an object');

    this.buildTeamMatchesUrl = buildTeamMatchesUrl.bind(this);
    this.readRawMatches      = readRawMatches.bind(this);
    this.parseRawMatches     = parseRawMatches.bind(this);
    this.getMatches          = getMatches.bind(this);

    this.buildTableUrl       = buildTableUrl.bind(this);
    this.readRawTable        = readRawTable.bind(this);
    this.parseRawTable       = parseRawTable.bind(this);
    this.getTable            = getTable.bind(this);

    Object.assign(this, params);
  }
}

module.exports = SboData;
