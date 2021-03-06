const mongoose = require('mongoose');
const https = require('https');
const fs = require('fs');
const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');

const key = fs.readFileSync('/etc/letsencrypt/live/www.eudocia.ml/privkey.pem');
const cert = fs.readFileSync('/etc/letsencrypt/live/www.eudocia.ml/fullchain.pem');
const options = {
  key,
  cert,
};

const httpsServer = https.createServer(options, app);
let server;

mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  logger.info('Connected to MongoDB');
  // process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  server = app.listen(config.port, () => {
    logger.info(`Listening to port ${config.port}`);
  });

  httpsServer.listen(config.httpsPort, () => {
    logger.info(`HTTPS server starting on port : ${config.httpsPort}`);
  });
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});

