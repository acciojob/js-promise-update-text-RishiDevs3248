// your JS code here
let output = document.getElementById('output');

function xyz() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

xyz()
  .then((message) => {
    output.textContent = message;
  })
  .catch((err) => {
    console.error(err);
  });
