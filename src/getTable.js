const getTable = async function(id) {
  const raw = await this.readRawTable(id);

  return this.parseRawTable(raw);
};

module.exports = getTable;
