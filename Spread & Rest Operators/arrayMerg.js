// Function for merging 2 array

const mergArray = (...a) => {
  let c = [...a[0], ...a[1]];
  console.log(c);
};

const a = [1, 2, 6, 7, 3, 32];
const b = [3, 4];

mergArray(a, b);
