const userInputString = prompt(
    "please enter froyo flavors and please make a seperation with commas.", 
    "Vanilla, Stawberry, coffee"
);

let flavorArray = userInputString.split(",").map(flavor => flavor.trim());

let flavorCount = {};

flavorArray.forEach(flavor => {
    FlavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
});

console.table(flavorCount);

for (const key in flavorCount) {
    if (flavorCount.hasOwnProperty(key)){
        console.log(`Flavor: ${Key}, Count: ${flavorCount[Key]}`);
    }
}
