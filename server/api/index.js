const router = require('express').Router();
const knex = require('../db/connect')();

router.get('/user-data/:uuid', getUserDataHandler);
router.post('/user-data', postUserDataHandler);

const APPLICATIONS_TABLE_COLUMNS = ['id', 'type', 'source', 'number','first_name','middle_name','last_name','name_suffix',
                                    'date_of_birth','language','hair_color','eye_color'];
const ADDRESSES_TABLE_COLUMNS = ['resident_id', 'type as addressType', 'street_address_1', 'street_address_2','city', 'state', 'zip'];
const EMAILS_TABLE_COLUMNS = ['resident_id', 'address as email_address'];
const PHONE_NUMBERS_TABLE_COLUMNS = ['resident_id', 'number as phone_number'];

function getUserDataHandler(req, res){
  knex('applications')
  .join('addresses', 'applications.id', 'addresses.resident_id')
  .join('emails', 'emails.resident_id', 'applications.id')
  .join('phone_numbers', 'phone_numbers.resident_id', 'applications.id')
  .select(...APPLICATIONS_TABLE_COLUMNS.map((d) => { return 'applications.' + d }),
          ...ADDRESSES_TABLE_COLUMNS.map((d) => { return 'addresses.' + d }),
          ...EMAILS_TABLE_COLUMNS.map((d) => { return 'emails.' + d }),
          ...PHONE_NUMBERS_TABLE_COLUMNS.map((d) => { return 'phone_numbers.' + d }))
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
    .select(...APPLICATIONS_TABLE_COLUMNS.map((d) => { return 'applications.' + d }),
    ...ADDRESSES_TABLE_COLUMNS.map((d) => { return 'addresses.' + d }),
    ...EMAILS_TABLE_COLUMNS.map((d) => { return 'emails.' + d }),
    ...PHONE_NUMBERS_TABLE_COLUMNS.map((d) => { return 'phone_numbers.' + d }))
    .where('applications.id', req.body.uuid)
      .then(function(data){
        res.send(data);
      })
  });
}

module.exports = router;
module.exports.getUserDataHandler = getUserDataHandler;
module.exports.postUserDataHandler = postUserDataHandler;
