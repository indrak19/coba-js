let pembeli = [
  {
    pembeli: 1,
    harga_rumah: 150,
    lama_ansuran: 60,
  },
  {
    pembeli: 2,
    harga_rumah: 150,
    lama_ansuran: 12,
  },
  {
    pembeli: 3,
    harga_rumah: 90,
    lama_ansuran: 120,
  },
  {
    pembeli: 4,
    harga_rumah: 150,
    lama_ansuran: 36,
  },
  {
    pembeli: 5,
    harga_rumah: 150,
    lama_ansuran: 24,
  },
];

let bunga = 0.001;

function ansuran(harga_rumah, bunga, lama_ansuran) {
  return harga_rumah / lama_ansuran + harga_rumah * bunga;
}

for (let item of pembeli) {
  item.ansuran = ansuran(item.harga_rumah, bunga, item.lama_ansuran);
}

let hasil_angsuran_terbesar = pembeli.sort((a, b) => a.ansuran - b.ansuran);
let hasil_angsuran_terkecil = pembeli.sort((a, b) => b.ansuran - a.ansuran);
console.log(hasil_angsuran_terbesar[0]);
console.log(hasil_angsuran_terkecil[hasil_angsuran_terkecil.length - 1]);
