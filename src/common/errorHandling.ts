process.on('uncaughtException', (error: Error) => {
  console.log(`Uncaught Exception: ${error.message}`);
  // TODO: error logging to file
  process.exit(1);
});

process.on('unhandledRejection', (reason: Error) => {
  console.log(`Unhandled Rejection: ${reason.message}`);
  // TODO: error logging to file
});
