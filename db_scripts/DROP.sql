SET foreign_key_checks = 0;

DROP TABLE IF EXISTS places CASCADE;
DROP TABLE IF EXISTS tags CASCADE;
DROP TABLE IF EXISTS places_tags CASCADE;
DROP TABLE IF EXISTS user CASCADE;
DROP TABLE IF EXISTS history CASCADE;

SET foreign_key_checks = 1;