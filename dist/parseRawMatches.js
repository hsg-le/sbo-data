"use strict";

var parseRawMatches = function parseRawMatches(raw, homeGymNos) {
  var _this = this;

  var matches = [];
  homeGymNos = homeGymNos || [];

  if (raw && raw[0]) {
    var rawMatches = raw[0].dataList || [];
    rawMatches.forEach(function (rawMatch) {
      var date = null;

      if (rawMatch.gDate && rawMatch.gDate.trim()) {
        date = 20 + rawMatch.gDate.split('.').reverse().join('-');
      }

      _this.logger.debug(rawMatch);

      var match = {
        date: date,
        time: rawMatch.gTime,
        scoreHome: Number(rawMatch.gHomeGoals.trim()) || 0,
        scoreGuest: Number(rawMatch.gGuestGoals.trim()) || 0,
        scoreHomeHalftime: Number(rawMatch.gHomeGoals_1.trim()) || 0,
        scoreGuestHalftime: Number(rawMatch.gGuestGoals_1.trim()) || 0,
        pointsHome: Number(rawMatch.gHomePoints.trim()) || 0,
        pointsGuest: Number(rawMatch.gGuestPoints.trim()) || 0,
        id: rawMatch.gID,
        postal: rawMatch.gGymnasiumPostal,
        city: rawMatch.gGymnasiumTown,
        street: rawMatch.gGymnasiumStreet,
        gymnasium: rawMatch.gGymnasiumName,
        gymnasiumId: rawMatch.gGymnasiumID,
        gymnasiumNo: rawMatch.gGymnasiumNo,
        comment: rawMatch.gComment,
        moved: rawMatch.gComment === 'verl.'
      };

      if (homeGymNos.includes(rawMatch.gGymnasiumNo)) {
        match.away = false;
        match.opponent = rawMatch.gGuestTeam;
      } else {
        match.away = true;
        match.opponent = rawMatch.gHomeTeam;
      }

      matches.push(match);
    });
    return matches;
  }

  this.logger.warning('Unknown structure for parseRawMatches', raw);
  return [];
};

module.exports = parseRawMatches;