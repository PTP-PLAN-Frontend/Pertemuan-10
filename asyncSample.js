// callback
const callback = (error, result) => {
  if (error) {
    return 'Program kamu error'
  }

  return result;
};

function fungsiUtamaYangMemakaiCallback(number1, number2, callback) {
  if (typeof number1 !== 'number') {
    return callback(true, null);
  }

  if (typeof number2 !== 'number') {
    return callback(true, null);
  }

  const hasilPengoperasianMatematikaSederhana = number1 + number2;
  if (typeof hasilPengoperasianMatematikaSederhana !== 'number' || hasilPengoperasianMatematikaSederhana < 0) {
    return callback(true, null);
  }

  return callback(false, `Program kamu berjalan lancar. Ini adalah hasil dari pengoperasian dari fungsi ini = ${hasilPengoperasianMatematikaSederhana}`)
}

console.log(fungsiUtamaYangMemakaiCallback("1", 2, callback));
console.log(fungsiUtamaYangMemakaiCallback(1, 2, callback));
console.log(fungsiUtamaYangMemakaiCallback(-1, -2, callback));

// async with settimeout

function p1() {
  console.log('p1 dijalankan');
}

function p2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('p2 berhasil dijalankan');
    }, 3000);
  })
}

function p3() {
  let hasilYangHanyaBisaDijalankanOlehP3;
  p1();
  p2().then(result => {
    console.log(`result dari dalam fungsi p3 ${result}`);
    hasilYangHanyaBisaDijalankanOlehP3 = result;

    if (hasilYangHanyaBisaDijalankanOlehP3) {
      console.log('p3 berhasil dijalankan karena ada promise dari p2 berhasil');
    }
  }).catch((error) => {
    console.log(error);
  })
}

p3();