const auman = 'roaaar roaaaaar roaaaaaaar';
const regex = /roa{3,7}r/;
const isNameValid = auman.match(regex);
// console.log(isNameValid);

// console.log(`${auman} ini adalah auman singa`);

// fungsi biasa
function sapaDia(namaDia) {
  // console.log(this);
  return `halo ${namaDia} apa kabar`;
}
// console.log(sapaDia('danu'));

// arrow function
const sapaDiaa = (namaDia) => {
  // console.log(this);
  return `halo ${namaDia} apa kabar`;
}

// console.log(sapaDiaa('luthfi'))

// object destructuring
const manusia = {
  nama: 'thoriq',
  umur: 12,
  kelamin: 'pria',
};

// manusia.nama
// manusia.umur
const { umur, nama } = manusia;
// console.log(`${nama} berumur ${umur}`)

// array destructuring
const buah = ['apple', 'jeruk', 'manggis']
// buah[0] => apple
// buah[1] => jeruk
const [apple, , , jeruk] = buah;
// console.log(`buah favorit saya adalah ${apple} dan juga ${jeruk}`)

const tambahSiswa = (nama, kelas) => ({
  newNama: nama,
  newKelas: kelas,
})
// console.log(tambahSiswa('Alvito', 1));

const tambahKota = (nama, kota) => ({
  nama,
  kota,
})

// console.log(tambahKota("Hayland", "Bogor"));

const array1 = [1, 2, 3, 4, 5];
const array2 = [...array1, 'pertama', 'kedua'];
// console.log(array2);

const object1 = {
  gelas: 'kotor',
  piring: 'bersih',
};

const object2 = {
  ...object1,
}

// console.log(object2);

const apaAja = (...cobaSemuaTipeData) => {
  console.log(cobaSemuaTipeData);
  console.log(typeof cobaSemuaTipeData);
};

// apaAja(1,2,3);
// apaAja('hello world');
// apaAja(true);
// apaAja(array1);
// apaAja(object1);



function timeout() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(console.log('hai ini dari fungsi timeout'))
    }, 5000);
  });
}

async function sayHai(name, quote = 'You are not fill the quote yet') {
  await timeout();
  console.log(`Hay my name is ${name} and here is my quote for you today ${quote}`);
}

sayHai('lidia');