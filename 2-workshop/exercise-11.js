function exercise11() {
  // Exercise 11
  //
  // Write a program that creates a string that represents an 8×8 grid.
  // At each position of the grid there is either an "_" or a "#" character.
  // The characters should form a chessboard.
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  // const chessBoard = [
  //   ["#_","#_","#_","#_"],
  //   ["_#","_#","_#","_#"],
  // ]

  // console.log(chessBoard[0])
  // console.log(chessBoard[1])

  let blackRow = "#_#_#_#_"
  let whiteRow = "_#_#_#_#"

  for (i = 1; i <= 8; i++) {
  if(i % 2 === 0) {
    console.log(whiteRow) 
  }
    else console.log(blackRow)
  }

  // const variable = chessboard.values();
  // for (const value of variable) {
  //   console.log(value)
  // }

  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-11
exercise11();
module.exports = exercise11;
