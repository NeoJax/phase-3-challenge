\c grocerystore

\COPY products FROM './grocery.csv' DELIMITER ',' CSV HEADER;;

INSERT INTO orders(sid, totalcost) VALUES (1, 19.65);
INSERT INTO orders(sid, totalcost) VALUES (2, 15.14);
INSERT INTO orders(sid, totalcost) VALUES (4, 14.08);
INSERT INTO orders(sid, totalcost) VALUES (3, 44.84);
INSERT INTO orders(sid, totalcost) VALUES (7, 37.32);

INSERT INTO orders(sid, totalcost) VALUES (7, 11.08);
INSERT INTO orders(sid, totalcost) VALUES (3, 17.24);
INSERT INTO orders(sid, totalcost) VALUES (2, 16.68);
INSERT INTO orders(sid, totalcost) VALUES (4, 10.50);
INSERT INTO orders(sid, totalcost) VALUES (4, 13.29);

INSERT INTO orders(sid, totalcost) VALUES (7, 12.70);
INSERT INTO orders(sid, totalcost) VALUES (7, 9.99);
INSERT INTO orders(sid, totalcost) VALUES (2, 13.39);
INSERT INTO orders(sid, totalcost) VALUES (3, 7.86);
INSERT INTO orders(sid, totalcost) VALUES (1, 3.92);


INSERT INTO shoppers(shopper, orders) VALUES ('Shane', 2);
INSERT INTO shoppers(shopper, orders) VALUES ('James', 3);
INSERT INTO shoppers(shopper, orders) VALUES ('Cara', 3);
INSERT INTO shoppers(shopper, orders) VALUES ('Leon', 3);
INSERT INTO shoppers(shopper, orders) VALUES ('Rachel', 0);

INSERT INTO shoppers(shopper, orders) VALUES ('Phil', 0);
INSERT INTO shoppers(shopper, orders) VALUES ('Xavier', 4);
