const age = [12, 13, 15, 14, 17];
const age2 = [15, 17, 21];
const age3 = [35, 47, 54];

const allAge = age.concat(age2).concat(age3).concat([3]);

const allAge2 = [...age, ...age2, ...age3]
console.log(allAge2);


const sochib = 250;
const minister = 450;
const business = 650;
const takaPoysa = [250, 450, 650];
// const maximum = Math.max(sochib, minister, business);
const maximum = Math.max(...takaPoysa);
console.log(maximum);