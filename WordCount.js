/*
Question:
https://exercism.org/tracks/javascript/exercises/word-count
*/

function removeTrailingApostrophe(string) {
    return string.replace(/^'+/, "").replace(/'+$/, "");
}

// This assumes special chars can would be pressent and needs to be stripped
// I believe I covered for most special chars here
// \ was needed before - for it to work
function removeSpecialCharsExceptSingleApostrophe(string, regex = /[!"=#$%&)*+\-.(/:;<>?@[\]^_`{|}~]/g) {
    return string.replace(regex, '');
}

export const countWords = (string) => {
  var result = {}; // use object instead of array because of exercisms test cases

  // Remove other punctuations except for single apostrophes
  // Split by either comma or a space. A test case had comma separated list
  var stringWithoutSpecialChars = removeSpecialCharsExceptSingleApostrophe(string).split(/[,\s]+/g)
  console.log(stringWithoutSpecialChars)

  var cleanedString = '';
  for (const indexOfAWord in stringWithoutSpecialChars) {
      cleanedString += ' ' + removeTrailingApostrophe(stringWithoutSpecialChars[indexOfAWord])
  }

  cleanedString.trim().split(" ").forEach(function(individualWords) {
    individualWords = individualWords.toLowerCase(); //case insensitive
    
    result[individualWords] = result[individualWords] ? ++result[individualWords] : 1;
    
  });

  return result;
};
