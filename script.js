(function () {
  //(1)
  //forEach
  // fare console.log() di ogni elemento di array
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const array2 = [10, 1, 2, 5, 6];
  function num(item) {
    console.log(item);
  }
  array.forEach(num);

  // fare console.log() di ogni elemento di array
  // // fare un console.log() di ogni elemento, dopo un set timeout di (elemento * index)
  // // risultato: dopo 0s: console.log(1)
  // //            dopo 1s: console.log(2)
  // //            dopo 2s: console.log(3)
  const delayedElement = () => {
    array.forEach((item, index) => {
      setTimeout(() => {
        console.log(item);
      }, 1000 * item * index);
    });
  };
  delayedElement();
  // (3)
  // filter
  // tenere dentro l'array solo i numeri pari
  // risultato: [2,4,6,8]
  funzNumPari = (item, index, array) => item % 2 === 0;
  const numPari = array.filter(funzNumPari);
  console.log(numPari);
  //   (4)
  // tenere solo i numeri in comune con questo array:
  // [10, 1, 2, 5, 6]
  // utility: Array.includes oppure Array.indexOf
  // risultato: [1,2,5,6]
  numInclusi = (item, index, array) => array2.includes(item);
  console.log(array.filter(numInclusi));
})();
