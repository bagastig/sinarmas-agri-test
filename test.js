function puzzle(angka) {
  let splitted = angka.split("-");
  let password = "";
  let startingNumber = Number(splitted[0]);
  let endNumber = Number(splitted[1]);
  let counter = 0;
  for (let i = startingNumber; i <= endNumber; i++) {
    let splitStarting = startingNumber.toString().split("");

    let flag = true;
    let double = false;
    for (let j = 0; j <= splitStarting.length; j++) {
      if (j < splitStarting.length - 1) {
        if (splitStarting[j] === splitStarting[j + 1]) {
          double = true;
        }
        if (splitStarting[j] > splitStarting[j + 1]) {
          flag = false;
          break;
        }
      } else if (j === splitStarting.length - 1) {
        break;
      }
    }

    if (flag === true && double === true) {
      counter++;
    }
    startingNumber++;
  }
  console.log(startingNumber);
  return counter;
}
console.log(puzzle("278384-824795"));
