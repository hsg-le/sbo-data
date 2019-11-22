"use strict";

var buildTeamMatchesUrl = function buildTeamMatchesUrl(id) {
  var part = 'cmd=data&lvTypeNext=team';
  return "".concat(this.baseUrl, "?").concat(part, "&lvIDNext=").concat(id);
};

module.exports = buildTeamMatchesUrl;