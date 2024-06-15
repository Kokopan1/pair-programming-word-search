

// Searches for Words in the Array
const wordSearch = (letters, word) => {
  // Check is the Araay is an Array or is Empty
  if (!Array.isArray(letters) || letters.length === 0) {
    return false;
  }

  //Checks If There Is a Match Horizontally
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
 
  //Checks If There Is a Match Vorizontally
  const transposeVertical = transpose(letters);
  const verticalJoin = transposeVertical.map(ls => ls.join(''));
  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
    
};
// Turns the Array Around
const transpose = function(matrix) {

  //Create Variables Rows and Colums to Reference from Matrix
  const rows = matrix.length;
  const cols = matrix[0].length;
 
  //Create a New Matrix Array
  const transposeMatrix  = [];
   
  //Pushes in Colums into New Matrix
  for (let j = 0; j < cols; j++) {
    transposeMatrix[j] = [];
  }
 
  //Swapping The Values from Matrix into transposeMatrix
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      transposeMatrix[j][i] = matrix[i][j];
    }
  }
   
  //Return answer
  return transposeMatrix;
};


module.exports = wordSearch;

//@AshleyJansen
//@Islander333

