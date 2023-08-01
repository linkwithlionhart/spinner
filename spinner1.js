process.stdout.write('hello from spinner1.js... \rheyyy\n');


// Leveraging \r and setTimeout for Spinner
// Using this \r, we can fake an animation by replacing/rewriting characters in the same spot after a delay.
setTimeout(() => {
  process.stdout.write('\rl   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backlash since it's a special character.
  process.stdout.write('\r\\   ');
}, 700)

// ... fill in the rest yourself ...
setTimeout(() => {
  process.stdout.write('\rl   ');
}, 900);

setTimeout(() => {
  console.log('\n');
}, 950);