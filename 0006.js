function dontGiveMeFive(start, end)
{
  let count = 0;
  for (let i = start;i <= end;i++) {
    if (i.toString().indexOf('5') != -1) {
      continue;
    }
    count++;  
  }
  return count;
}
console.log(dontGiveMeFive(1, 9));