function countWords(str) {
    const words = str.split(" ");
    const wordCountMap = new Map();
    for (const word of words) {
      const count = wordCountMap.get(word) || 0;
      wordCountMap.set(word, count + 1);
    }
    return wordCountMap;
  }
  const str = "hello world hello";
  const wordCountMap = countWords(str);
  console.log(wordCountMap);

//   This should output the following Map object:   Map(2) { 'hello' => 2, 'world' => 1 }
  
    