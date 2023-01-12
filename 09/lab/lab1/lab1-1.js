const game = {
    team1: 'Bayern munich',
    team2: 'Borrussia Dortmund',
    players: [
        ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'],
        ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// Câu 1:
const { players } = game;
const [players1, players2] = players;
// console.log(players1, players2);

// Câu 2:
const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// Câu 3:
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// Câu 4:
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// Câu 5:
const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);

// Câu 6:
let arr = [];
const printGoals = function(...players) {
    console.log(players);
    console.log(`${players.length} cầu thủ đã ghi bàn`);
}
printGoals(...game.scored);

// Câu 7:
team1 < team2 && console.log("Team 1 is more likely to win");