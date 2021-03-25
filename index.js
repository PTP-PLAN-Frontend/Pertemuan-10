const auman = 'roaaar roaaaaar roaaaaaaar';
const regex = /roa{3,7}r/;
const isNameValid = auman.match(regex);
console.log(isNameValid);