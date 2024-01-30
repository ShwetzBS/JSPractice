const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//. Loop over the game.scored array and print each player name to the console,
//along with the goal number (Example: "Goal 1: Lewandowski")

const players_score = game.scored.entries();

for (const [i, j] of players_score) {
  console.log(`Goal ${i + 1}: ${j}`);
}

//Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember

const check = Object.entries(game.odds);
console.log(check);
let sum = 0;
for (const [x, y] of check) {
  sum += y;
}

const avg = sum / check.length;
console.log(avg);

//Print the 3 odds to the console, but in a nice formatted way, exactly like this:
//Odd of victory Bayern Munich: 1.33
//Odd of draw: 3.25
//Odd of victory Borrussia Dortmund: 6.

for (const [v, k] of Object.entries(game.odds)) {
  const condition = v === "x" ? `draw` : `victory ${game[v]}`;
  console.log(`Odd of ${condition} : ${k} `);
}

//: Create an object called 'scorers' which contains the names of the
//players who scored as properties, and the number of goals as the value. In this
//game, it will look like this:
//{
// Gnarby: 1,
//Hummels: 1,
//Lewandowski: 2
//}
