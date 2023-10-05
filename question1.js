
function lowerCaseWords(input) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(input)) {
        reject('Input is not an array');
      } else {
        const filteredWords = input.filter(item => typeof item === 'string');
        const lowercasedWords = filteredWords.map(word => word.toLowerCase());
        resolve(lowercasedWords);
      }
    });
    
}
  

const myArray = [1, 'Apple', 'Banana', 42, 'Cherry', 'Date'];
lowerCaseWords(myArray)
  .then(result => {
    console.log('Lowercased Words:', result);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });