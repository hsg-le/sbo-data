const buildTableUrl = function(id) {
  const part = 'cmd=data&lvTypeNext=class&subType=table';

  return `${this.baseUrl}?${part}&lvIDNext=${id}`;
};

module.exports = buildTableUrl;
