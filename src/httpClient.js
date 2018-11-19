const superagent = require('superagent');

class HttpClient {
  request(req) {
    return new Promise((resolve, reject) => {
      req.end((err, res) => {
        if(err) {
          return reject({
            err,
            ...res
          });
        }

        resolve(res.body || res.text);
      });
    });
  }

  get(url) {
    const req = superagent.get(url);

    return this.request(req);
  }

  put(url, data) {
    const req = superagent.put(url, data);

    return this.request(req);
  }

  post(url, data) {
    const req = superagent.post(url, data);

    return this.request(req);
  }

  delete(url) {
    const req = superagent.delete(url);

    return this.request(req);
  }
}

module.exports = new HttpClient();
