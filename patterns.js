function increasePyramid(n) {
  // n === number of rows
  //the number of n (lines) === number of times the loop should run
  for (let row = 1; row <= n; row++) {
    console.log("*".repeat(row))
  }
}

function decreasePyramid(n) {
  // n === number of rows
  //the number of n (lines) === number of times the loop should run
  for (let row = n; row >= 1; row--) {
    console.log("*".repeat(row))
  }
}

// testing the while loop
function increaseWhile(n) {
  let row = 1
  while (row <= n) {
    console.log("*".repeat(row))
    row++
  }
}

function pyramid(n) {
  // n === number of rows
  //the number of n (lines) === number of times the loop should run
  // the spaces === the number of columns
  for(let row = 0; row <= n; row++){
    console.log(" ".repeat(n-row) + "* ".repeat(row))
  }
}

function upsideDownPyramid(n) {
  // n === number of rows
  //the number of n (lines) === number of times the loop should run
  for(let row = n; row >= 1; row--){
    console.log(" ".repeat(n-row) + "* ".repeat(row))
  }
}

function square(n) {
  // n === number of rows
  //the number of columns === the number of rows
  for (let row = 0; row <= n; row++) {
    console.log("*".repeat(n))
  }
}

console.log("increase triangle")
increasePyramid(5)

console.log("-".repeat(10))

console.log("Decrease triangle")
decreasePyramid(5)

console.log("-".repeat(10))

console.log("Pyramid")
pyramid(5)

console.log("-".repeat(10))

console.log("upsideDown Pyramid")
upsideDownPyramid(5)

console.log("-".repeat(10))

console.log("square format")
square(5)