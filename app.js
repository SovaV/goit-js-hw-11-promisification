const delay = (ms) => {
  new Promise((resolve, reject) => {
    const cnFulf = Math.random() > 0.5;
  });
};
console.log(ms);
// const logger = (time) => console.log(`Resolved after ${time}ms`);

// // Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms
