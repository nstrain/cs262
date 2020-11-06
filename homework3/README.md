<br>Homework3
<br>
<br>A.
<br>
<br>https://sheltered-sands-18268.herokuapp.com/
<br>https://sheltered-sands-18268.herokuapp.com/players
<br>https://sheltered-sands-18268.herokuapp.com/games
<br>https://sheltered-sands-18268.herokuapp.com/players/:id
<br>router.put("/players/:id", updatePlayer);
<br>router.post('/players', createPlayer);
<br>router.delete('/players/:id', deletePlayer);
<br>
<br>B.
<br>
<br>https://sheltered-sands-18268.herokuapp.com/ //nullipotent
<br>https://sheltered-sands-18268.herokuapp.com/players //nullipotent
<br>https://sheltered-sands-18268.herokuapp.com/games //nullipotent
<br>https://sheltered-sands-18268.herokuapp.com/players/:id //nullipotent
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
