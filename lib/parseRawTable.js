const _ = require('lodash');

const parseRawTable = function(raw) {
  const table = [];

  if(raw && raw[0]) {
    const rawTable = raw[0].dataList || [];

    rawTable.forEach(rawEntry => {
      const entry = _.pick(rawEntry, ['pointsPlus', 'pointsMinus']);

      const parsed = {
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
