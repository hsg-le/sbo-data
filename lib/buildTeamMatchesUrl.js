const buildTeamMatchesUrl = function(id) {
  return `https://h4a.it4sport.de/spo/spo-proxy_public.php?cmd=data&lvTypeNext=team&lvIDNext=${id}`;
};

module.exports = buildTeamMatchesUrl;
