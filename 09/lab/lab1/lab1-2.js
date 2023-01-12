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
const goals = game.scored;
for (const [goal, name] of goals.entries()) {
    console.log(`Goal ${goal+1}: ${name}`);
}

// Câu 2: 
const odds = game.odds;
let sum = 0;
for (const odd of Object.values(odds)) {
    sum += odd;
}
console.log(`Tỉ lệ kết quả trận đấu là: ${sum/Object.values(odds).length}`);

// Câu 3:
console.log("-- -- -- -- -- -- --");
const arrOdds = Object.entries(odds);
for (const [team, odd] of arrOdds) {
    const teamStr = team === "x" ? "hòa của draw" : `thắng ${game[team]} của`;
    console.log(`Tỉ lệ ${teamStr} là: ${odd}`);
}

// NOTICE:
// Có 3 cách kết nối thuộc tính của javaScript
// C1: objectName.property  // person.age
// C2: objectName["property"]  // person["age"]
// C3: objectName.[expression]  // x = "age"; person[x];

// game[team] viết như này vẫn truy cập được vì [team] này tương đương với [expression] hay có thể hiểu là team kia đang in ra một chuỗi kiểu như "team";


const scorers = {
    Gnarby: 1,
    Hummels: 1,
    Lewandowski: 2
}

const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card'],
]);

// 1)
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2)
gameEvents.delete(64);
console.log(gameEvents);

// 3)
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`1 sự kiện xảy ra, trung bình mỗi ${time/gameEvents.size} phút`);

// 4)

for (const [minute, event] of gameEvents) {
    const round = minute <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${round} HALF] ${minute}: ${event}`);
}