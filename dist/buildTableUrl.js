"use strict";

var buildTableUrl = function buildTableUrl(id) {
  return "https://h4a.it4sport.de/spo/spo-proxy_public.php?cmd=data&lvTypeNext=class&subType=table&lvIDNext=".concat(id);
};

module.exports = buildTableUrl;