const arr = ['X', 'Y',,'Z'];


//Simple For Loop
for (let i = 0; i < arr.length; ++i) {
  console.log('Simple for '+arr[i]);
}

//For in Loop
for (let i in arr) {
  console.log('For in '+arr[i]);
}

//For of Loop
for (const x of arr) {
  console.log('For of '+x);
}

//ForEach Loop
arr.forEach((x, i) => console.log('forEach '+x));
