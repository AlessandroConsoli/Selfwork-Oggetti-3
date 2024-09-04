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
        this.players.forEach( (player)=>{ 
            for (let i = 1; i <= 10 ; i++) {
                player.scores.push (Math.floor(Math.random() * (10 - 1 +1) + 1));
            }            
        })            
    },
    'addPlayer' : function (nome) {
        let newPlayer = {name : nome, scores : []}
        for (let i = 1; i <= 10 ; i++) {
            newPlayer.scores.push (Math.floor(Math.random() * (10 - 1 +1) + 1));
        }
        this.players.push(newPlayer)
        console.log(`${newPlayer.name} si è unito alla partita`);
    },
    'totalScore' : function () {
        this.players.forEach(player=>{
            let tot = player.scores.reduce((acc, num)=> acc + num)
            player.totale=tot;
        })
        this.players.sort((a, b)=> b.totale - a.totale)
    },
    'winner' : function () {
        let winner = this.players[0]
        console.log(`VINCE ${winner.name} con ${winner.totale} punti`);        
    },
    'finalRanking' : function () {
        console.log('CLASSIFICA FINALE:');
        this.players.forEach(player => {
            console.log(`${player.name} => ${player.totale} punti`);
        })
    }
}

bowling.playersList();
bowling.gameSimulator();
bowling.addPlayer('Luigi');
bowling.totalScore();
bowling.finalRanking();
bowling.winner();

