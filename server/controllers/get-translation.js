'use strict';

const translationDir = __dirname + '/../../client/i18n/';

const es = require(translationDir + 'es.json');
const hi = require(translationDir + 'hi.json');
const ja = require(translationDir + 'ja.json');
const km = require(translationDir + 'km.json');
const ko = require(translationDir + 'ko.json');
const th = require(translationDir + 'th.json');
const tl = require(translationDir + 'tl.json');
const vi = require(translationDir + 'vi.json');
const zh = require(translationDir + 'zh.json');

const emoji = require(translationDir + 'emoji.json');

module.exports = function getTranslation(req, res) {
  const translations = {
    es: es,
    hi: hi,
    ja: ja,
    km: km,
    ko: ko,
    th: th,
    tl: tl,
    vi: vi,
    zh: zh,

    emoji: emoji
  };

  const languageCode = req.params.code;
  const translation = translations[languageCode];

  if (!translation) {
    res.status(500).json({message: 'Language not found'});
  } else {
    res.json(translation);
  }
};

