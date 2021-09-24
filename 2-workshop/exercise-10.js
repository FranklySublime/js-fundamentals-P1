function exercise10() {
  // Exercise 10
  //
  // Write a loop that makes seven calls to console.log to
  // output the following triangle:
  // #
  // ##
  // ###
  // ####
  // #####
  // ######
  // #######
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------

  // const triangle = ["#","##","###","####","#####","######","#######"];
  // const variable = triangle.values();

  // for(const value of variable) {
  //       console.log(value)
  // }

  // const triangle = ["#","##","###","####","#####","######","#######"];
  // triangle[1][7]

  let triangle = "#"
  for (let num = 1; num <= 7; num++ ) {
  console.log(triangle)
  triangle = triangle + "#"
}

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
// yarn test exercise-10
exercise10();
module.exports = exercise10;
