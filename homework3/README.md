Homework3

A.

router.get("/", readHelloMessage);
router.get("/players", readPlayers);
router.get("/games", readGames);
router.get("/players/:id", readPlayer);
router.put("/players/:id", updatePlayer);
router.post('/players', createPlayer);
router.delete('/players/:id', deletePlayer);

B.

https://sheltered-sands-18268.herokuapp.com/games
router.get("/", readHelloMessage); //nullipotent
router.get("/players", readPlayers); //nullipotent
router.get("/games", readGames); //nullipotent
router.get("/players/:id", readPlayer); //nullipotent
router.put("/players/:id", updatePlayer); //idempotent
router.post('/players', createPlayer); // not idempotent or nullipotent
router.delete('/players/:id', deletePlayer); //idempotent

C.

This service is Restfull because it uses Https, is stateless (doesn't track visits), exposees structured urls, transfers data as json.

D.

I think there is an impedance mismatch because the tables don't go cleanly into a class. We have structual differences between the database and the phone app because I wanted the players in a game.
