const buildTeamMatchesUrl = function(id) {
  const part = 'cmd=data&lvTypeNext=team';

  return `${this.baseUrl}?${part}&lvIDNext=${id}`;
};

module.exports = buildTeamMatchesUrl;
