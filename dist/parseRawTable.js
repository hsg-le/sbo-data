"use strict";

var _ = require('lodash');

var parseRawTable = function parseRawTable(raw) {
  var table = [];

  if (raw && raw[0]) {
    var rawTable = raw[0].dataList || [];
    rawTable.forEach(function (rawEntry) {
      var entry = _.pick(rawEntry, ['pointsPlus', 'pointsMinus']);

      var parsed = {
        rank: rawEntry.tabScore,
        name: rawEntry.tabTeamname,
        played: rawEntry.numPlayedGames,
        won: rawEntry.numWonGames,
        lost: rawEntry.numLostGames,
        draw: rawEntry.numEqualGames,
        goalsShot: rawEntry.numGoalsShot,
        goalsGot: rawEntry.numGoalsShot
      };
      table.push(_.merge(entry, parsed));
    });
    return table;
  }

  this.logger.warning('Unknown structure for parseRawTable', raw);
  return [];
};

module.exports = parseRawTable;