let a=36, b=20;
console.log(`${a} км/ч соответствует ${36/3.6} м/с`);
console.log(`${b} м/с соответствует ${20*3.6} км/ч`);

let f=3,s=4,t=6;
if ((f+s>t) && (s+t>f)&&(f+t>s)){
    console.log("треугольник существует");
    console.log(`Периметр - ${f+s+t}`);
    let p=(f+s+t)/2;
    console.log(`Площадь - ${Math.sqrt(p*(p-f)*(p-s)*(p-t))}`);
    console.log(`Соотношение - ${(f+s+t)/Math.sqrt(p*(p-f)*(p-s)*(p-t))}`);
} else {
    console.log("треугольник не существует");
}


let num = prompt('Введите число', );
if (typeof num=='String'){
    console.log("Вы ввели не число")
}
