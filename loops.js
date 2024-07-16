// FOR LOOP

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  let ans = 5 * i;
  console.log(ans);
}

// WHILE LOOP

let sum = 0;
let i = 1;
while (i <= 10) {
  sum = sum + i;
  i++;
}
console.log(sum);

i = 10;
while (i > 0) {
  console.log(i);
  i--;
}

// DO WHILE LOOP

i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

i = 5;
let factorial = 1;
do {
  factorial = factorial * i;
  i--;
} while (i >= 1);
console.log(factorial);

//NESTED LOOPS
for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}

//  Continue statement
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  else console.log(i);
}

// Break statement
for (let i = 1; i <= 10; i++) {
  if (i === 7) break;
  else console.log(i);
}
