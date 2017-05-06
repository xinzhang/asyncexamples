const delay = (ms) => new Promise( resolve => {
  setTimeout(resolve, ms);
})

async function* generator() {
  await delay(1000);
  yield 1;
  await delay(1000);
  yield 2;
  await delay(1000);
  yield 3;
}

async function main() {
  for await (const v of generator()) {
    console.log(v);
  }
}

main();
