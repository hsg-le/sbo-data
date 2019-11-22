"use strict";

var buildTableUrl = function buildTableUrl(id) {
  var part = 'cmd=data&lvTypeNext=class&subType=table';
  return "".concat(this.baseUrl, "?").concat(part, "&lvIDNext=").concat(id);
};

module.exports = buildTableUrl;