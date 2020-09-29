

function exercise10() {
  function returnsHashString(numberOfHashtags){ //numberOfHashtags = 4
    let hashtagString = ''; // hashtagString = ''
    for (let i=0; i<numberOfHashtags; i++){ // i=4; numberOfHashtags = 4; 4<4
      hashtagString = "#" + hashtagString; // hashtagString = 3 + '210' = "3210"
    }
    return hashtagString; // return hashtagString = '3210'
  }

  for(let numberOfHashtags=1; numberOfHashtags<=7; numberOfHashtags++){
    console.log(returnsHashString(numberOfHashtags)); // '#'
  }
}

exercise10();

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-10

module.exports = exercise10;
