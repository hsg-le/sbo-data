const getMatches = async function(id, homeGymNos) {
  const raw = await this.readRawMatches(id);

  return this.parseRawMatches(raw, homeGymNos);
};

module.exports = getMatches;
