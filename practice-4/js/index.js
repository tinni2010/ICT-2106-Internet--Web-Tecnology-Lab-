document.getElementById('countBtn').addEventListener('click', () => {
  const sentence = document.getElementById('inputText').value;
  console.log("Input Sentence:", sentence);

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  document.getElementById('result').textContent = `There are ${count} vowels in the sentence.`;
});
