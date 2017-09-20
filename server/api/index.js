const router = require('express').Router();
const userDataService = require('../services/user-data');

router.get('/user-data/:uuid', getUserDataHandler);
router.post('/user-data', postUserDataHandler);



function getUserDataHandler(req, res) {
  userDataService.selectFromAllTables(req.params.uuid)
    .then(function (data) {
      res.send(data);
    });
}

function postUserDataHandler(req, res) {
  userDataService.insertApplication(req.body.application)
    .then(() => {
      return userDataService.insertAddress(req.body.address)
    })
    .then(() => {
      return userDataService.insertEmail(req.body.email)
    })
    .then(() => {
      return userDataService.insertPhoneNumber(req.body.phoneNumber)
    })
    .then(() => {
      return userDataService.selectFromAllTables(req.body.application.uuid)
        .then(function (data) {
          res.send(data);
        });
    });
}

module.exports = router;
module.exports.getUserDataHandler = getUserDataHandler;
module.exports.postUserDataHandler = postUserDataHandler;
