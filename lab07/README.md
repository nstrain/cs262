<h1>CS 262 - Lab 7</h1>
<h4>This lab is based on https://cs.calvin.edu/courses/cs/262/kvlinden/07is/lab.html</h4>

<h6>Exercise 7.1</h6>
Player(<u>ID</u>, emailAddress, name)
PlayerGame(<u>gameID, playerID</u>, score, cash, position)
GameProperty(<u>gameID, property</u>, playerID, development)
Game (<u>ID</u>, time)

<h6>Exercise 7.2</h6>
-- Drop previous versions of the tables if they they exist, in reverse order of foreign keys.
DROP TABLE IF EXISTS GameProperty;
DROP TABLE IF EXISTS PlayerGame;
DROP TABLE IF EXISTS Game;
DROP TABLE IF EXISTS Player;

-- Create the schema.
CREATE TABLE Game (
	ID integer PRIMARY KEY, 
	time timestamp
	);

CREATE TABLE Player (
	ID integer PRIMARY KEY, 
	emailAddress varchar(50) NOT NULL,
	name varchar(50)
	);

CREATE TABLE PlayerGame (
	gameID integer REFERENCES Game(ID), 
	playerID integer REFERENCES Player(ID),
	score integer,
	cash integer,
	position varchar(50) NOT NULL,
	PRIMARY KEY (gameID, playerID)
	);

CREATE TABLE GameProperty (
	gameID integer REFERENCES Game(ID),
	property varchar(50),
	playerID integer REFERENCES Player(ID),
	development varchar(50),
	PRIMARY KEY (gameID, property)
	);

-- Allow users to select data from the tables.
GRANT SELECT ON Game TO PUBLIC;
GRANT SELECT ON Player TO PUBLIC;
GRANT SELECT ON PlayerGame TO PUBLIC;
GRANT SELECT ON GameProperty TO PUBLIC;

-- Add sample records.
INSERT INTO Game VALUES (1, '2006-06-27 08:00:00');
INSERT INTO Game VALUES (2, '2006-06-28 13:20:00');
INSERT INTO Game VALUES (3, '2006-06-29 18:41:00');

INSERT INTO Player(ID, emailAddress) VALUES (1, 'me@calvin.edu');
INSERT INTO Player VALUES (2, 'king@gmail.edu', 'The King');
INSERT INTO Player VALUES (3, 'dog@gmail.edu', 'Dogbreath');

INSERT INTO PlayerGame VALUES (1, 1, 0.00, 1, 'start');
INSERT INTO PlayerGame VALUES (1, 2, 0.00, 1, 'start');
INSERT INTO PlayerGame VALUES (1, 3, 2350.00, 1, 'start');
INSERT INTO PlayerGame VALUES (2, 1, 1000.00, 1, 'start');
INSERT INTO PlayerGame VALUES (2, 2, 0.00, 1, 'start');
INSERT INTO PlayerGame VALUES (2, 3, 500.00, 1, 'start');
INSERT INTO PlayerGame VALUES (3, 2, 0.00, 1, 'start');
INSERT INTO PlayerGame VALUES (3, 3, 5500.00, 1, 'start');

INSERT INTO GameProperty VALUES (1, 'board walk', 1, 'hotel');
INSERT INTO GameProperty VALUES (2, 'board walk', 3, 'none');
INSERT INTO GameProperty VALUES (3, 'board walk', 2, 'none');
INSERT INTO GameProperty VALUES (1, 'Rail Road', 2, 'house');
INSERT INTO GameProperty VALUES (1, 'New York Ave', 3, 'hotel');
