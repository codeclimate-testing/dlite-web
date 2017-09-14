const router = require('express').Router();
const knex = require('../../db/connect')();

router.get('/user-data/:uuid', getUserDataHandler);
router.post('/user-data', postUserDataHandler);

function getUserDataHandler(req, res){
  knex('applications')
  .join('addresses', 'applications.id', 'addresses.resident_id')
  .join('emails', 'emails.resident_id', 'applications.id')
  .join('phone_numbers', 'phone_numbers.resident_id', 'applications.id')
  .select('applications.id', 'applications.type', 'applications.source', 'applications.number','applications.first_name',
  'applications.middle_name','applications.last_name','applications.name_suffix','applications.date_of_birth','applications.language',
  'applications.hair_color','applications.eye_color','addresses.type', 'addresses.street_address_1', 'addresses.street_address_2',
  'addresses.city', 'addresses.state', 'addresses.zip','emails.address as email_address' , 'phone_numbers.number as phone_number')
  .where('applications.id', req.params.uuid)
    .then(function(data){
      res.send(data);
    });
}

function postUserDataHandler(req, res){
  knex('applications')
  .insert({
    id: req.body.uuid,
    type: req.body.type,
    source: req.body.source,
    number: req.body.number,
    first_name: req.body.first_name,
    middle_name: req.body.middle_name,
    last_name: req.body.last_name,
    name_suffix: req.body.name_suffix,
    date_of_birth: req.body.date_of_birth,
    language: req.body.language,
    hair_color: req.body.hair_color,
    eye_color: req.body.eye_color
  })
  .then(() => {
    return knex('addresses')
      .insert({
        resident_id: req.body.uuid,
        type: req.body.addressType,
        street_address_1: req.body.street_address_1,
        street_address_2: req.body.street_address_2,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
      })
  })
  .then(()=> {
    return knex('emails')
      .insert({
        resident_id: req.body.uuid,
        address: req.body.email_address,
      })
  })
  .then(()=> {
    return knex('phone_numbers')
      .insert({
        resident_id: req.body.uuid,
        number: req.body.phone_number,
      })
  })
  .then(() => {
    return knex('applications')
    .join('addresses', 'applications.id', 'addresses.resident_id')
    .join('emails', 'emails.resident_id', 'applications.id')
    .join('phone_numbers', 'phone_numbers.resident_id', 'applications.id')
    .select('applications.id', 'applications.type', 'applications.source', 'applications.number','applications.first_name',
    'applications.middle_name','applications.last_name','applications.name_suffix','applications.date_of_birth','applications.language',
    'applications.hair_color','applications.eye_color','addresses.type', 'addresses.street_address_1', 'addresses.street_address_2',
    'addresses.city', 'addresses.state', 'addresses.zip','emails.address as email_address' , 'phone_numbers.number as phone_number')
    .where('applications.id', req.body.uuid)
      .then(function(data){
        res.send(data);
      })
  });
}

module.exports = router;
module.exports.getUserDataHandler = getUserDataHandler;
module.exports.postUserDataHandler = postUserDataHandler;