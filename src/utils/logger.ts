import { writeFile } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const pathToInfoLogFile = path.join(
  dirname(fileURLToPath(import.meta.url)), '..', '..', 'logs', 'info.log',
);

const pathToErrorLogFile = path.join(
  dirname(fileURLToPath(import.meta.url)), '..', '..', 'logs', 'error.log',
);

const logger = {
  error: async (errorInfo: string, shouldExit = false): Promise<void> => {
    console.error(`ERROR: ${errorInfo}`);
    writeFile(pathToErrorLogFile, errorInfo, {
      flag: 'a',
    }, (err) => {
      if (err) {
        console.log(err);
      }
      if (shouldExit) {
        process.exit(1);
      }
    });
  },
  info: async (requestInfo: string): Promise<void> => {
    console.log(`INFO: ${requestInfo}`);
    writeFile(pathToInfoLogFile, requestInfo, {
      flag: 'a',
    }, (err) => {
      if (err) {
        console.log(err);
      }
    });
  },
};

export default logger;
