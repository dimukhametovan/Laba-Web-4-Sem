let a = 36,
  b = 20;
console.log(`${a} км/ч соответствует ${a / 3.6} м/с`);
console.log(`${b} м/с соответствует ${b * 3.6} км/ч`);

let f = 3,
  s = 4,
  t = 6;
if (f + s > t && s + t > f && f + t > s) {
  console.log("треугольник существует");
  console.log(`Периметр - ${f + s + t}`);
  let p = (f + s + t) / 2;
  console.log(`Площадь - ${Math.sqrt(p * (p - f) * (p - s) * (p - t))}`);
  console.log(
    `Соотношение - ${(f + s + t) / Math.sqrt(p * (p - f) * (p - s) * (p - t))}`
  );
} else {
  console.log("треугольник не существует");
}

let num = prompt("Введите число");
if (isNaN(parseInt(num))) {
  console.log("Вы ввели не число");
} else {
  for (let i = 0; i <= num; i++) {
    if (i === 0) {
      console.log(`${i} buzz`);
    } else if (i % 5 === 0) {
      console.log(`${i} fizz buzz`);
    } else if (i % 2 === 0) {
      console.log(`${i} buzz`);
    } else {
      console.log(`${i} fizz`);
    }
  }
}

let treeCount = parseInt(prompt("Введите количество слоев елки"));
let tree = "";
if (isNaN(treeCount)) {
  console.log("Вы ввели не число");
} else {
  for (let i = 0; i <= treeCount; i++) {
    if (i === treeCount) {
      tree = tree + "||";
    } else if (i % 2 === 0) {
      tree = tree + `${"#".repeat(i)}\n`;
    } else {
      tree = tree + `${"*".repeat(i)}\n`;
    }
  }
}
console.log(tree);

let guessNumber = 12;
let probablyNumber = parseInt(prompt("Введите число"));

if (isNaN(probablyNumber)) {
  console.log("Вы ввели не число");
} else {
  while (probablyNumber !== guessNumber) {
    if (probablyNumber < guessNumber) {
      console.log("Ваше число меньше");
    } else {
      console.log("Ваше число больше");
    }
    probablyNumber = parseInt(prompt("Введите число"));
  }
  console.log("Угадано");
}

let n = parseInt(prompt("Введите число n"));
let x = parseInt(prompt("Введите число x"));
let y = parseInt(prompt("Введите число y"));

let result = n % x === 0 && n % y === 0;
console.log(`n=${n}, x=${x}, y=${y} => ${result}`);

let kvartal;
let month = parseInt(prompt("Введите номер месяца"));
if (month <= 3) {
  kvartal = 1;
} else if (month <= 6) {
  kvartal = 2;
} else if (month <= 9) {
  kvartal = 3;
} else {
  kvartal = 4;
}
console.log(`месяц ${month} => ${kvartal} квартал`);
