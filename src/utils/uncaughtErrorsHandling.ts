import logger from './logger';

process.on('uncaughtException', async (error: Error) => {
  const timeStamp = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  await logger.error(`[${timeStamp}] ${error.name}: ${error.message}\n`, true);
});

process.on('unhandledRejection', async (reason: Error) => {
  const timeStamp = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  logger.error(`[${timeStamp}] ${reason.name}: ${reason.message}\n`);
});
