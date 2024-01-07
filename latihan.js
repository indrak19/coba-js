/*Find Maximum Number
Input : arr = [2, 3, 10, 6, 4, 8, 1]
Output : 10

Compress string
input – ‘aaaaabbbbcccccccdaa’
Output – ‘a5b4c7da2’

Sort Array
input : arr = [2, 3, 10, 6, 4, 8, 1]
Output : arr = [1, 2, 3, 4, 6, 8, 10]

Find odd and even number
input : arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
Output : arr = [‘ganjil’, 2, ‘ganjil’, 4, ‘ganjil’, 6, ‘ganjil’, 8, ‘ganjil’]

Reverse String
Input : ‘abcdefg’
Output : ‘gfedcba’
Create file on based on test number (ex: 1.js, 2.js), and push to repository Github*/

//Latihan NO.1 mengambil nilai Maximum

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);
console.log("=================================");

//Latihan NO. 2 Compress string

let string = "aaaaabbbbcccccccdaa";
//onsole.log(string.indexof("a"));
console.log("=================================");

//Latihan NO. 3 sort Array
arr = [2, 3, 10, 6, 4, 8, 1];
console.log(
  arr.sort(function (a, b) {
    return a - b;
  })
);

function urut(a, b) {
  if (a - b < 0) {
    return console.log(a);
  } else a - b < 0;
  {
    return console.log(b);
  }
}
urut(30, 20);
console.log("=================================");

//Latihan NO. 4 find odd and even number
input: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Latihan NO 5
console.log("=================================");
string = "abcdefg";

function reverseString(str) {
  // 1. split string menjadi array substring
  var splitString = str.split("");
  // hasilnya: [ 'h', 'e', 'l', 'l', 'o' ]

  // 2. reverse array
  var reverseArray = splitString.reverse();
  // hasilnya: [ 'o', 'l', 'l', 'e', 'h' ]
  // 3. gabungkan semua element array menjadi string
  var joinArray = reverseArray.join("");
  // hasilny: olleh

  return joinArray;
}
console.log(reverseString("hello"));

function reverseString(str) {
  /*
    1. Buat variabel currentString dan newString
    currentString menampung nilai dari parameter
    newString adalah string kosong yang menampung nilai baru
     */
  var currentString = str;
  var newString = "";
  /*
    2. lakukan perulangan secara decrement atau penurunan (--)
    nilai awal perulangan (let i) adalah panjang currentString dikurangi 1 yaitu 4
    jika nilai i >= 0 maka jalankan kode yang ada di dalam perulangan
    jika sudah selesai, lakukan decrement atau nilai i dikurangi 1 yaitu 4 - 1: 3
     */
  for (let i = str.length - 1; i >= 0; i--) {
    newString = newString + currentString[i];
  }
  /*
    iterasi pertama: ambil index ke 4 currentString lalu digabung dan disimpan ke newString
    newString = "" + "o"
    hasil newString: o
   iterasi kedua: ambil index ke 3 currentString lalu digabungkan dan disimpan ke newString
    newString = "o" + "l"
    hasil newString: ol
   lanjut sampai iterasi terakhir.
   sampai iterasi terakhir
    iterasi terakhir: ambil index ke 0 currentString lalu digabungkan dan disimpan ke newString
    newString = "olle" + "h"
    hasil newString: "olleh"
    */
  // 3. return nilai newString
  return newString;
}
console.log(reverseString("hello"));
