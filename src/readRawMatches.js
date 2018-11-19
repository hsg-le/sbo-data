const httpClient = require('./httpClient');

const readRawMatches = async function(id) {
  const url = this.buildTeamMatchesUrl(id);

  this.logger.debug(`Loading ${url}`);

  const raw = await httpClient.get(url);

  return raw;
};

module.exports = readRawMatches;
