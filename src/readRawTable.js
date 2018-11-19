const httpClient = require('./httpClient');

const readRawTable = async function(id) {
  const url = this.buildTableUrl(id);

  this.logger.debug(`Loading ${url}`);

  const raw = await httpClient.get(url);

  return raw;
};

module.exports = readRawTable;
