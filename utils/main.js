/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import dbClient from './utils/db';

const waitConnection = () => new Promise((resolve, reject) => {
  let i = 0;
  const repeatFct = async () => {
    await setTimeout(() => {
      i += 1;
      if (i >= 10) {
        reject();
      } else if (!dbClient.isAlive()) {
        repeatFct();
      } else {
        resolve();
      }
    }, 1000);
  };
  repeatFct();
});

// eslint-disable-next-line jest/require-hook
(async () => {
  console.log(dbClient.isAlive());
  await waitConnection();
  console.log(dbClient.isAlive());
  console.log(await dbClient.nbUsers());
  console.log(await dbClient.nbFiles());
})();
