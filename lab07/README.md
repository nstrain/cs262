<br><h1>CS 262 - Lab 7</h1>
<br><h4>This lab is based on https://cs.calvin.edu/courses/cs/262/kvlinden/07is/lab.html</h4>
<br>
<br><h6>Exercise 7.1</h6>
<br>Player(<u>ID</u>, emailAddress, name)
<br>PlayerGame(<u>gameID, playerID</u>, score, cash, position)
<br>GameProperty(<u>gameID, property</u>, playerID, development)
<br>Game (<u>ID</u>, time)
<br>
<br><h6>Exercise 7.2</h6>
<br>-- Drop previous versions of the tables if they they exist, in reverse order of foreign keys.
<br>DROP TABLE IF EXISTS GameProperty;
<br>DROP TABLE IF EXISTS PlayerGame;
<br>DROP TABLE IF EXISTS Game;
<br>DROP TABLE IF EXISTS Player;
<br>
<br>-- Create the schema.
<br>CREATE TABLE Game (
<br>	ID integer PRIMARY KEY, 
<br>	time timestamp
<br>	);
<br>
<br>CREATE TABLE Player (
<br>	ID integer PRIMARY KEY, 
<br>	emailAddress varchar(50) NOT NULL,
<br>	name varchar(50)
<br>	);
<br>
<br>CREATE TABLE PlayerGame (
<br>	gameID integer REFERENCES Game(ID), 
<br>	playerID integer REFERENCES Player(ID),
<br>	score integer,
<br>	cash integer,
<br>	position varchar(50) NOT NULL,
<br>	PRIMARY KEY (gameID, playerID)
<br>	);
<br>
<br>CREATE TABLE GameProperty (
<br>	gameID integer REFERENCES Game(ID),
<br>	property varchar(50),
<br>	playerID integer REFERENCES Player(ID),
<br>	development varchar(50),
<br>	PRIMARY KEY (gameID, property)
<br>	);
<br>
<br>-- Allow users to select data from the tables.
<br>GRANT SELECT ON Game TO PUBLIC;
<br>GRANT SELECT ON Player TO PUBLIC;
<br>GRANT SELECT ON PlayerGame TO PUBLIC;
<br>GRANT SELECT ON GameProperty TO PUBLIC;
<br>
<br>-- Add sample records.
<br>INSERT INTO Game VALUES (1, '2006-06-27 08:00:00');
<br>INSERT INTO Game VALUES (2, '2006-06-28 13:20:00');
<br>INSERT INTO Game VALUES (3, '2006-06-29 18:41:00');
<br>
<br>INSERT INTO Player(ID, emailAddress) VALUES (1, 'me@calvin.edu');
<br>INSERT INTO Player VALUES (2, 'king@gmail.edu', 'The King');
<br>INSERT INTO Player VALUES (3, 'dog@gmail.edu', 'Dogbreath');
<br>
<br>INSERT INTO PlayerGame VALUES (1, 1, 0.00, 1, 'start');
<br>INSERT INTO PlayerGame VALUES (1, 2, 0.00, 1, 'start');
<br>INSERT INTO PlayerGame VALUES (1, 3, 2350.00, 1, 'start');
<br>INSERT INTO PlayerGame VALUES (2, 1, 1000.00, 1, 'start');
<br>INSERT INTO PlayerGame VALUES (2, 2, 0.00, 1, 'start');
<br>INSERT INTO PlayerGame VALUES (2, 3, 500.00, 1, 'start');
<br>INSERT INTO PlayerGame VALUES (3, 2, 0.00, 1, 'start');
<br>INSERT INTO PlayerGame VALUES (3, 3, 5500.00, 1, 'start');
<br>
<br>INSERT INTO GameProperty VALUES (1, 'board walk', 1, 'hotel');
<br>INSERT INTO GameProperty VALUES (2, 'board walk', 3, 'none');
<br>INSERT INTO GameProperty VALUES (3, 'board walk', 2, 'none');
<br>INSERT INTO GameProperty VALUES (1, 'Rail Road', 2, 'house');
<br>INSERT INTO GameProperty VALUES (1, 'New York Ave', 3, 'hotel');
