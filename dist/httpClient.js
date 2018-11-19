"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var superagent = require('superagent');

var HttpClient =
/*#__PURE__*/
function () {
  function HttpClient() {
    _classCallCheck(this, HttpClient);
  }

  _createClass(HttpClient, [{
    key: "request",
    value: function request(req) {
      return new Promise(function (resolve, reject) {
        req.end(function (err, res) {
          if (err) {
            return reject(_objectSpread({
              err: err
            }, res));
          }

          resolve(res.body || res.text);
        });
      });
    }
  }, {
    key: "get",
    value: function get(url) {
      var req = superagent.get(url);
      return this.request(req);
    }
  }, {
    key: "put",
    value: function put(url, data) {
      var req = superagent.put(url, data);
      return this.request(req);
    }
  }, {
    key: "post",
    value: function post(url, data) {
      var req = superagent.post(url, data);
      return this.request(req);
    }
  }, {
    key: "delete",
    value: function _delete(url) {
      var req = superagent.delete(url);
      return this.request(req);
    }
  }]);

  return HttpClient;
}();

module.exports = new HttpClient();