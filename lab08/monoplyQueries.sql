--8.1A
SELECT * FROM Game ORDER BY time DESC;

--8.1B
SELECT * FROM Game WHERE (time >= date_trunc('week', CURRENT_TIMESTAMP - interval '1 week') and
       time < date_trunc('week', CURRENT_TIMESTAMP)
      );

--8.1C
SELECT * FROM Player WHERE name IS NOT NULL;

--8.1D
SELECT playerID FROM PlayerGame WHERE score > 2000;

--8.1E
SELECT * FROM Player WHERE emailAddress LIKE '%gmail.%';

-------------------------------------------------------------------
--8.2A
SELECT score FROM Player, PlayerGame WHERE 
    PlayerGame.playerID = Player.ID
    AND Player.name = 'The King'
    ORDER BY score DESC;

--8.2B
SELECT Player.name From Player, PlayerGame, Game WHERE Game.time = '2006-06-28 13:20:00' AND PlayerGame.gameID = Game.ID AND player.ID = PlayerGame.playerID ORDER BY PlayerGame.score DESC LIMIT 1;

--8.2C
-- It returns an entry if its id is less than another entry with the same name

--8.2D
-- This could be useful if there is a table where an element serves multiple roles, such as a family tree database
