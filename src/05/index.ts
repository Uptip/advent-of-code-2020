/* istanbul ignore file */

import { runMain } from './main-solution';
import { runAlternative } from './alternative-solution';

if (process.env.NODE_ENV !== 'test') {
  (async () => {
    const pathToInput = '05/input.txt';
    await runMain(pathToInput);
    await runAlternative(pathToInput);
  })();
}
