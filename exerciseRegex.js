// 1. Buat sebuah program untuk mengecek apakah karakter pertama dalam sebuah string mengandung huruf besar atau tidak.
// Jika huruf pertama adalah huruf besar. Program akan menampilkan/console.log ‘Huruf pertama adalah huruf besar’
// Jika huruf pertama bukan huruf besar. Program akan menampilkan/console.log ‘Huruf pertama adalah huruf kecil’
console.log('==========================soal 1=============================');
function firstCharCheck(string) {
  const firstCharacter = string.charAt(0);
  const upperCaseRegex = /[A-Z]/g;
  const lowerCaseRegex = /[a-z]/g;
  if (upperCaseRegex.test(firstCharacter)) {
    console.log('Huruf pertama adalah huruf besar');
    return;
  }
  if (lowerCaseRegex.test(firstCharacter)) {
    console.log('Huruf pertama adalah huruf kecil');
    return;
  }

  console.log('tidak ada huruf yang di cek');
  return;
}
firstCharCheck('Hello');
firstCharCheck('world');

// 2. Buat sebuah program untuk memvalidasi format nomor handphone
// Nomor handphone minimum 10 digit dan maksimum 12 digit
// Hanya menerima digit karakter
console.log('==========================soal 2=============================');
function digitOnlyCheck(phoneNumber) {
  const digitOnlyRegex = /\d{10,12}/g;
  if (digitOnlyRegex.test(phoneNumber)) {
    console.log(`Nomer ${phoneNumber} dengan panjang ${phoneNumber.toString().length} valid`);
    return;
  }
  console.log('Hanya menerima digit karakter dengan minimum 10 digit dan maksimum 12 digit');
  return
};
digitOnlyCheck(123456789);
digitOnlyCheck(1234567891);
digitOnlyCheck(123456789876);

// 3. Buat sebuah program yang menyediakan kalimat berikut sehingga user mendapatkan pencarian yang persis sama.
// Bagaimana cara memulai usaha bisnis
// Bootcamp impact byte
// Status covid hari ini
console.log('==========================soal 3=============================');
function findText(text) {
  const regex = /^Bagaimana cara memulai usaha bisnis$|^Bootcamp impact byte$|^Status covid hari ini$/g;
  if (regex.test(text)) {
    console.log('Text yang kamu cari ada');
    return;
  }
  console.log('Maaf tidak ada text yang cocok');
  return;
}
findText('Bagaimana cara memulai usaha bisnis');
findText('Bootcamp impact byte.');

// 4. Buat tampilan untuk seluruh soal diatas. Buat sekreatif teman-teman. 1 soal = 1 fitur = 1 page.
