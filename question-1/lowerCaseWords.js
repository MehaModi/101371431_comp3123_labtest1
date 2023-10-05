// Function to filter non-strings and lowercase words
function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(mixedArray)) {
        reject('Input is not an array');
        return;
      }
  
      const filteredWords = mixedArray.filter(item => typeof item === 'string');
      const lowercasedWords = filteredWords.map(word => word.toLowerCase());
  
      if (lowercasedWords.length === 0) {
        reject('No valid strings found in the array');
      } else {
        resolve(lowercasedWords);
      }
    });
  }
  
  // Input array
  const mixedArray = ['Pzza', 10, true, 25, false, 'Wings'];
  
  // Call the function
  lowerCaseWords(mixedArray)
    .then(result => {
      console.log(result); // Output: ['pzza', 'wings']
    })
    .catch(error => {
      console.error(error);
    });
  