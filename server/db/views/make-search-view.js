'use strict';

module.exports.up =
  `CREATE OR REPLACE VIEW search_view AS (
    SELECT
      applications.id,
      applications.first_name,
      applications.last_name,
      applications.date_of_birth,
      applications.completed_at,
      singleAddress.street_address_1,
      singleAddress.type AS "address_type",
      singleAddress.city,
      singleCard.type AS "type",
      card_history.number AS "card_number"
    FROM applications

      INNER JOIN (
        SELECT
          addresses.id,
          addresses.application_id,
          addresses.street_address_1,
          addresses.type,
          addresses.city
        FROM addresses
        ORDER BY id
        LIMIT 1
      ) AS singleAddress
      ON (singleAddress.application_id=applications.id)

      INNER JOIN (
        SELECT
          cards.id,
          cards.application_id,
          cards.type
        FROM cards
        ORDER BY id
        LIMIT 1
      ) AS singleCard
      ON (singleCard.application_id=applications.id)

      INNER JOIN (
        SELECT
          card_histories.id,
          card_histories.application_id,
          card_histories.number
        FROM card_histories
        ORDER BY id
        LIMIT 1
      ) AS card_history
      ON (card_history.application_id=applications.id)
  );`;
module.exports.down = 'DROP VIEW "search_view";';