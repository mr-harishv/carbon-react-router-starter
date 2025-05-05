/* eslint-disable */
import { setupServer } from 'msw/node';
import { getNetworking } from './networking';
import { getRouter } from './router';
import { getRoutes } from '../routes/routes';

const _setupServer = (...args) => {
  const mocks = [];
  const networking = getNetworking();

  getRoutes(getRouter(mocks, networking));

  const server = setupServer(...mocks, ...args);
  server.networking = networking;
  return server;
};

export const server = _setupServer();
