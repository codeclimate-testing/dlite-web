'use strict';

const db = require('../../db/connect')();
const cardOptionsParser = require('../../helpers/card-options');

function insertApplication(application) {
  return db('applications').where('id', application.id)
    .then((records) => {
      if(records.length > 0){
        return db('applications').where('id', application.id)
          .update(application).returning('*');
      }
      else{
        return db('applications').insert(application).returning('*');
      }
    })
}

function insertAddresses(addresses, application_id) {
  return db('addresses').where('application_id', application_id)
    .then((records) => {
      if(records.length > 0) {
        let updatedData = addresses.map( address => {
          return db('addresses').where('application_id', application_id)
            .where('type', address.type)
            .update(address).returning('*')
        });
        return Promise.all(updatedData);
      }
      else {
        return db('addresses').insert(addresses).returning('*');
      }
    });
}

function insertCards(cards, application_id) {
  return db('cards').where('application_id', application_id)
    .then((records) => {
      if(records.length > 0){
        return db('cards').where('application_id', application_id).del()
          .then(() => {
            return db('cards').insert(cards).returning('*');
          });
      }
      else{
        return db('cards').insert(cards).returning('*');
      }
    });
}

function insertPreviousNames(names, application_id) {
  return db('previous_names').where('application_id', application_id)
    .then((records) => {
      if(records.length > 0){
        return db('previous_names').where('application_id', application_id).del()
          .then(() => {
            return db('previous_names').insert(names).returning('*');
          })
      }
      else{
        return db('previous_names').insert(names).returning('*');
      }
    });
}

function insertCardOptions(options) {
  let cardIDs = []
  options.forEach((d) => {
    if(d.card_id && cardIDs.indexOf(d.card_id) === -1) {
      cardIDs.push(d.card_id);
    }
  });
  return db('card_options').whereIn('card_id', cardIDs)
    .then((records) => {
      if(records.length > 0){
        return db('card_options').whereIn('card_id', cardIDs).del()
          .then(() => {
            return db('card_options').insert(options).returning('*');
          });

      } else {
        return db('card_options').insert(options).returning('*');
      }
    });
}

function insertLicenseClasses(classes) {
  let cardIDs = []
  classes.forEach((d) => {
    if(d.card_id && cardIDs.indexOf(d) === -1) {
      cardIDs.push(d.card_id);
    }
  });
  return db('license_classes').whereIn('card_id', cardIDs)
  .then((records) => {
    if(records.length > 0){
      return db('license_classes').whereIn('card_id', cardIDs).del()
        .then(() => {
          return db('license_classes').insert(classes).returning('*');
        });

    } else {
      return db('license_classes').insert(classes).returning('*');
    }
  });
}

function insertOneToOne(key, data, application_id) {
  return db(key).where('application_id', application_id)
    .then((records) => {
      if(records.length > 0){
        return db(key)
          .where('application_id', application_id)
            .update(data)
              .returning('*');
      }
      else{
        return db(key).insert(data).returning('*');
      }
    });
}

function saveApplication(data) {
  let returnedData = [];
  let cardData = {};
  const application_id  = data.application.id;
  return insertApplication(data.application)
    .then((records) => {
      if(records.length > 0) {
        returnedData.application = records;
      }
      return insertAddresses(data.addresses, application_id);
    })
    .then((records) => {
      if(records.length > 0) {
        returnedData.addresses = records;
      }
      return insertOneToOne('emails', data.emails, application_id);
    })
    .then((records) => {
      if(records.length > 0) {
        returnedData.emails = records;
      }
      return insertOneToOne('phone_numbers', data.phone_numbers, application_id);
    })
    .then((records) => {
      if(records.length > 0) {
        returnedData.phone_numbers = records;
      }
      return insertOneToOne('organ_donations', data.organ_donations, application_id);
    })
    .then((records) => {
      if(records.length > 0) {
        returnedData.organ_donations = records;
      }
      return insertOneToOne('card_histories', data.card_histories, application_id);
    })
    .then((records) => {
      if(records.length > 0) {
        returnedData.card_histories = records;
      }
      return insertPreviousNames(data.previous_names, application_id);
    })
    .then((records) => {
      if(records.length > 0) {
        returnedData.previous_names = records;
      }
      return insertOneToOne('medical_histories', data.medical_histories, application_id);
    })
    .then((records) => {
      if(records.length > 0) {
        returnedData.medical_histories = records;
      }
      return insertOneToOne('license_issues', data.license_issues, application_id);
    })
    .then((records) => {
      if(records.length > 0) {
        returnedData.license_issues = records;
      }
      return insertOneToOne('veterans_info', data.veterans_info, application_id);
    })
    .then((records) => {
      if(records.length > 0) {
        returnedData.veterans_info = records;
      }
      return insertOneToOne('voting_registrations', data.voting_registrations, application_id);
    })
    .then((records) => {
      if(records.length > 0) {
        returnedData.voting_registrations = records;
      }
      return insertCards(data.cards, application_id);
    })
    .then((records) => {
      if(records.length > 0) {
        returnedData.cards = records;
      }
      cardData = records;
      data.card_options = cardOptionsParser.cardOptionsGenerator(cardData, data.card_options);
      return insertCardOptions(data.card_options);
    })
    .then((records) => {
      if(records.length > 0) {
        returnedData.card_options = records;
      }
      data.license_classes = cardOptionsParser.licenseClassGenerator(cardData, data.license_classes);
      return insertLicenseClasses(data.license_classes);
    })
    .then((records) => {
      if(records.length > 0) {
        returnedData.license_classes = records;
      }
      return returnedData;
    })
    .catch(function(err) {
      console.error('SAVE APPLICATION ERROR',err);
      return err;
    });
};

module.exports.saveApplication        = saveApplication;
module.exports.insertAddresses        = insertAddresses;
module.exports.insertApplication      = insertApplication;
module.exports.insertCards            = insertCards;
module.exports.insertCardOptions      = insertCardOptions;
module.exports.insertLicenseClasses   = insertLicenseClasses;
module.exports.insertOneToOne         = insertOneToOne;
module.exports.insertPreviousNames    = insertPreviousNames;