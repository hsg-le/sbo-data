"use strict";

var buildTeamMatchesUrl = function buildTeamMatchesUrl(id) {
  return "https://h4a.it4sport.de/spo/spo-proxy_public.php?cmd=data&lvTypeNext=team&lvIDNext=".concat(id);
};

module.exports = buildTeamMatchesUrl;