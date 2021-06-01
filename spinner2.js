const sentence = ['|','/','-','\\','|','/','-','\\'];

 // let splittedText = sentence.split(' ');

  const typeWriter = (array) => {
      let seconds = 0;
      for (let word of array) {
          setTimeout(() => {
              process.stdout.write('\r' + word);
          }, seconds)
          seconds += 100;
      }
  }
  typeWriter(sentence);