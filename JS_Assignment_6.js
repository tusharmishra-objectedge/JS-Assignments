const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'
    ],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
// 1
let players1 = game.players[0];
let players2 = game.players[1];
let gk = players1[0];
let fieldPlayers = players1.slice(1);
let allPlayers = players1.concat(players2);
let players1Final = players1.concat(['Thiago', 'Coutinho', 'Perisic']);
let team1 = game.odds.team1;
let draw = game.odds.x;
let team2 = game.odds.team2;
function printGoals(...players) {
    players.forEach(player => {
        console.log(player);
    });
    console.log(`Total number of goals: ${players.length}\n`);
}
let teams = { team1,team2}
let winningTeam = Object.keys(teams).find(team => teams[team] === Math.min(team1, team2));
console.log(`${winningTeam} is more likely to win.\n`);
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 2
for (let i = 0; i < game.scored.length; i++) {
    console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}
let odds = Object.values(game.odds)
let averageOdd = (odds.reduce((a, b) => a + b, 0)) / odds.length
console.log(`The average odd is ${averageOdd.toFixed(2)}`)
console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw: ${game.odds.x}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

// 3
const gameEvents = new Map([
    [17, 'Goal'],
    [36, 'Substitution'],
    [47, 'Goal'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'Goal'],
    [80, 'Goal'],
    [92, 'Yellow card']
])
let events = [...new Set([...(gameEvents.values())])];
console.log(`Event's array - ${events}\n`)
gameEvents.delete(64)
let eventAvg = 90 / events.length;
console.log(`An event happened, on average, every ${eventAvg} minutes\n`);
gameEvents.forEach((e, m) => {
    if (m <= 45) {
        console.log(`${m}: ${e} - first-half`);
    } else {
        console.log(`${m}: ${e} - second-half`);
    }
});
