<br>Homework3
<br>
<br>A.
<br>
<br>router.get("/", readHelloMessage);
<br>router.get("/players", readPlayers);
<br>router.get("/games", readGames);
<br>router.get("/players/:id", readPlayer);
<br>router.put("/players/:id", updatePlayer);
<br>router.post('/players', createPlayer);
<br>router.delete('/players/:id', deletePlayer);
<br>
<br>B.
<br>
<br>https://sheltered-sands-18268.herokuapp.com/games
<br>router.get("/", readHelloMessage); //nullipotent
<br>router.get("/players", readPlayers); //nullipotent
<br>router.get("/games", readGames); //nullipotent
<br>router.get("/players/:id", readPlayer); //nullipotent
<br>router.put("/players/:id", updatePlayer); //idempotent
<br>router.post('/players', createPlayer); // not idempotent or nullipotent
<br>router.delete('/players/:id', deletePlayer); //idempotent
<br>
<br>C.
<br>
<br>This service is Restfull because it uses Https, is stateless (doesn't track visits), exposees structured urls, transfers data as json.
<br>
<br>D.
<br>
<br>I think there is an impedance mismatch because the tables don't go cleanly into a class. We have structual differences between the database and the phone app because I wanted the players in a game.
