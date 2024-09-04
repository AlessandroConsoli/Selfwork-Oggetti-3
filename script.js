let bowling = {
    'players' : [
        {'name' : 'Livio', 'scores' : [0]},
        {'name' : 'Paola', 'scores' : [0]},
        {'name' : 'Filippo', 'scores' : [0]},
        {'name' : 'Giuseppe', 'scores' : [0]}
    ],
    'playersList' : function () {
        this.players.forEach( (player)=> console.log(`# ${player.name} ===> Punteggio attuale: ${player.scores}`));
    },
    'gameSimulator' : function () {
        let punteggi = this.players.forEach( (players)=> {for (let i = 1; i <= 10 ; i++) {
            this.players.push ( (player)=> Math.floor(Math.random() * (10 - 1 +1) + 1));
    }});
        return console.log(punteggi);            
    }
}

bowling.playersList();
bowling.gameSimulator();

