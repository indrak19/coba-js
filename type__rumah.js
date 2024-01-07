let pembeli = [
  {
    pembeli: 1,
    tipe_rumah: "A",
    lama_ansuran: 60,
  },
  {
    pembeli: 2,
    tipe_rumah: "B",
    lama_ansuran: 12,
  },
  {
    pembeli: 3,
    tipe_rumah: "A",
    lama_ansuran: 120,
  },
  {
    pembeli: 4,
    tipe_rumah: "C",
    lama_ansuran: 36,
  },
  {
    pembeli: 5,
    tipe_rumah: "D",
    lama_ansuran: 24,
  },
];

let bunga = 0.001;

function tipe_harga(tipe) {
  switch (tipe) {
    case "A":
      return 150;
    case "B":
      return 100;
    case "C":
      return 90;
    case "D":
      return 80;
  }
}

function ansuran(harga_rumah, bunga, lama_ansuran) {
  return harga_rumah / lama_ansuran + harga_rumah * bunga;
}

for (let item of pembeli) {
  item.ansuran = ansuran(tipe_harga(item.tipe_rumah), bunga, item.lama_ansuran);
  item.harga_rumah = tipe_harga(item.tipe_rumah);
}

let hasil_angsuran_terbesar = pembeli.sort((a, b) => a.ansuran - b.ansuran);
let hasil_angsuran_terkecil = pembeli.sort((a, b) => b.ansuran - a.ansuran);
console.log(hasil_angsuran_terbesar[0]);
console.log(hasil_angsuran_terkecil[hasil_angsuran_terkecil.length - 1]);
