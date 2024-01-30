const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);

console.log(gameEvents);

// Create an array 'events' of the different game events that happened

const mapArray = [...new Set(gameEvents.values())];
console.log(mapArray);

const check = [new Set(gameEvents.values())];
console.log(check);
console.log(`Checking`);

//After the game has finished, is was found that the yellow card from minute 64
//was unfair. So remove this event from the game events log.

gameEvents.delete(64);
console.log(gameEvents);

//. Compute and log the following string to the console: "An event happened, on
//average, every 9 minutes" (keep in mind that a game has 90 minutes)
//90;

console.log(`An event happened every ${90 / gameEvents.size} minutes`);

//Loop over 'gameEvents' and log each element to the console, marking
//whether it's in the first half or second half (after 45 min) of the game, like this:
//[FIRST HALF] 17: ⚽ GOA

for (const [key, value] of gameEvents) {
  console.log(`[${key >= 45 ? "SECOND HALF" : "FIRST HALF"}]${key}:${value}`);
}
