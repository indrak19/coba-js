//Latihan NO.1 mengambil nilai Maximum
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);

//Compress string

let string = "aaaaabbbbcccccccdaa";
console.log(string.indexOf("a"));
