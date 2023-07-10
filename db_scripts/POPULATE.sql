INSERT INTO places(id, name, address, coordx, coordy) VALUES (1 ,'IADE', 'Av. Dom Carlos I 4, 1200-649 Lisboa','38.707139', '-9.152417');
INSERT INTO places(id,name, address, coordx, coordy) VALUES (2,'POPOLO', '', '38.706958', '-9.153041');
INSERT INTO places(id,name, address, coordx, coordy) VALUES (3,'McDonalds', 'Av. Dom Carlos I 17-25, 1200-000 Lisboa', '38.707204', '-9.152883');

INSERT INTO tags (id,name) VALUES (1,'Private University Campus');
INSERT INTO tags (id,name) VALUES (2,'Public University Campus');
INSERT INTO tags (id,name) VALUES (3,'Cafe - Indoors');
INSERT INTO tags (id,name) VALUES (4,'Cafe - Outdoors');
INSERT INTO tags (id,name) VALUES (5,'Library');
INSERT INTO tags (id,name) VALUES (6,'Restaurant');

INSERT INTO places_tags (id,placesid, tagsid) VALUES (1,1,1);
INSERT INTO places_tags (id,placesid, tagsid) VALUES (2,1,3);
INSERT INTO places_tags (id,placesid, tagsid) VALUES (3,1,5);
INSERT INTO places_tags (id,placesid, tagsid) VALUES (4,2,4);
INSERT INTO places_tags (id,placesid, tagsid) VALUES (5,2,6);
INSERT INTO places_tags (id,placesid, tagsid) VALUES (6,3,3);
INSERT INTO places_tags (id,placesid, tagsid) VALUES (7,3,4);
INSERT INTO places_tags (id,placesid, tagsid) VALUES (8,3,6);

INSERT INTO users (id, name, pass) VALUES (1,'mrq','mrq');
INSERT INTO users (id, name, pass) VALUES (2,'aws','aws');

INSERT INTO history (id, start, finish, usersid, placesid) VALUES (1,'2023-06-27 10:50:22.321 +0100','2023-06-27 18:34:00.000 +0100',1,1);
INSERT INTO history (id, start, finish, usersid, placesid) VALUES (2,'2023-05-24 09:32:04.544 +0100','2023-05-24 13:54:00.000 +0100',1,1);



INSERT INTO places(name, address, coordx, coordy) VALUES ('namep', 'addressp', 'coordxp', 'coordyp');